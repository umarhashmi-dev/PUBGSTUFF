
"use client";

import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import type { Product } from '@/lib/products';
import { useAuth } from '@/hooks/use-auth';

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

  // Mocking behavior since Supabase is removed
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        setFavoriteItems(JSON.parse(savedFavorites));
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorites = useCallback((itemToAdd: Product) => {
    setFavoriteItems(prevItems => {
        if (prevItems.find(item => item.id === itemToAdd.id)) {
            return prevItems;
        }
        return [...prevItems, itemToAdd];
    });
  }, []);

  const removeFromFavorites = useCallback((id: number) => {
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const isFavorited = useCallback((id: number) => {
    return favoriteItems.some(item => item.id === id);
  }, [favoriteItems]);

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorited, loading }}>
      {children}
    </FavoritesContext.Provider>
  );
};
