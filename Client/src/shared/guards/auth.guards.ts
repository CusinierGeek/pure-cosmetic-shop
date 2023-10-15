import { useUser } from "@/shared/stores/";

//Objectif: Rediriger l'utilisateur vers la page de connexion s'il n'est pas authentifié
export function isAuthenticatedGuard() {
  const userStore = useUser();
  if (!userStore.isAuthenticated) {
    return "/signIn";
  }
}

//Objectif: Rediriger l'utilisateur vers la page de profil s'il est déjà authentifié
export function isNotAuthenticatedGuard() {
  const userStore = useUser();
  if (userStore.isAuthenticated) return "/profile";
}
