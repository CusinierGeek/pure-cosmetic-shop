# Chiffrement asynchrone
## Voici les commandes pour créer les clés privé et publique.

Ouvrir un terminal dans le répertoire ``/environment/keys``.

Exécuter ces deux commandes dans le teminal :

```javascript
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key

ssh-keygen -e -m PEM -f jwtRS256.key > jwtRS256.key.pub