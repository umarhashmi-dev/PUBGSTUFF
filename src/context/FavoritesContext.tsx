
"use client";

import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import type { Product } from '@/lib/products';
import { useAuth } from '@/hooks/use-auth';
import { supabase } from '@/lib/supabase';
import { allProducts } from '@/lib/products';

interface FavoritesContextType {
  favoriteItems: Product[];
  addToFavorites: (item: Product) => void;
  removeFromFavorites: (id: number) => void;
  isFavorited: (id: number) => boolean;
  loading: boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavoriteItems([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('product_id')
        .eq('user_id', user.id);

      if (error) throw error;
      
      const favoriteProductIds = data.map(item => item.product_id);
      const favoriteProducts = allProducts.filter(p => favoriteProductIds.includes(p.id));
      setFavoriteItems(favoriteProducts);

    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [user, fetchFavorites]);

  const addToFavorites = useCallback(async (itemToAdd: Product) => {
    if (!user) return;
    
    // Optimistic UI update
    setFavoriteItems(prevItems => {
        if (prevItems.find(item => item.id === itemToAdd.id)) {
            return prevItems;
        }
        return [...prevItems, itemToAdd];
    });

    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: user.id, product_id: itemToAdd.id });
    
    if (error) {
      console.error("Error adding to favorites:", error);
      // Revert if DB operation fails
      setFavoriteItems(prevItems => prevItems.filter(item => item.id !== itemToAdd.id));
    }
  }, [user]);

  const removeFromFavorites = useCallback(async (id: number) => {
    if (!user) return;

    // Optimistic UI update
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id));
    
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', user.id)
      .eq('product_id', id);

    if (error) {
      console.error("Error removing from favorites:", error);
      // Revert is not straightforward without fetching, but fetchFavorites will correct it on next load
    }
  }, [user]);

  const isFavorited = useCallback((id: number) => {
    return favoriteItems.some(item => item.id === id);
  }, [favoriteItems]);

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorited, loading }}>
      {children}
    </FavoritesContext.Provider>
  );
};
