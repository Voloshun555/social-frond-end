import { useAppSelector } from './hook-redux';

export const useAuth = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const isRefreshing = useAppSelector(state => state.auth.isRefreshing);
    const user = useAppSelector(state => state.auth.user);
    

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};
