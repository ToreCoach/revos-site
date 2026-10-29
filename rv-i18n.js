/* REVOS – traduzioni (IT originale → EN / ES / FR) per Coach, Player e pagine Area giocatori/allenatori.
   Traduce i nodi di testo e gli attributi (placeholder, title, aria-label) anche quando l'app li ridisegna. */
(function () {
  'use strict';
  (function(){var d=document.documentElement,s=document.createElement('style');s.textContent='html.rv-fs .wrap{padding-top:112px}';(document.head||document.documentElement).appendChild(s);function f(){var fs=innerWidth>=900&&innerHeight>=screen.height-2&&innerWidth>=screen.width-2;d.classList.toggle('rv-fs',fs)}f();addEventListener('resize',f)})();
  var LANGS = ['it', 'en', 'es', 'fr', 'de', 'pt', 'hr'];
  var D = Object.create(null);
  function a(it, en, es, fr, de, pt, hr) { D[it] = [en, es, fr, de, pt, hr]; }
  function b(it, de, pt, hr) { var e = D[it]; if (e) { e[3] = de; e[4] = pt; e[5] = hr; } }

  /* ---------- comuni ---------- */
  a('Email', 'Email', 'Correo electrónico', 'E-mail');
  a('Password', 'Password', 'Contraseña', 'Mot de passe');
  a('Entra', 'Sign in', 'Entrar', 'Se connecter');
  a('Esci', 'Log out', 'Salir', 'Se déconnecter');
  a('Video', 'Videos', 'Vídeos', 'Vidéos');
  a('Visto', 'Seen', 'Visto', 'Vu');
  a('Nuovo', 'New', 'Nuevo', 'Nouveau');
  a('Da rivedere', 'To review', 'Para repasar', 'À revoir');
  a('Importante', 'Important', 'Importante', 'Important');
  a('★ Importante', '★ Important', '★ Importante', '★ Important');
  a('nessuna', 'none', 'ninguna', 'aucune');
  a('Email o password non corrette.', 'Wrong email or password.', 'Correo o contraseña incorrectos.', 'E-mail ou mot de passe incorrect.');
  a('Nessuna connessione. Riprova.', 'No connection. Try again.', 'Sin conexión. Inténtalo de nuevo.', 'Pas de connexion. Réessayez.');
  a('Cambia password', 'Change password', 'Cambiar contraseña', 'Changer le mot de passe');
  a('Attiva notifiche', 'Turn on notifications', 'Activar notificaciones', 'Activer les notifications');
  a('Segna come visto', 'Mark as seen', 'Marcar como visto', 'Marquer comme vu');
  a('Gruppi', 'Groups', 'Grupos', 'Groupes');
  a('Giocatori', 'Players', 'Jugadores', 'Joueurs');
  a('Home', 'Home', 'Inicio', 'Accueil');

  /* ---------- Coach ---------- */
  a('Caricamento…', 'Loading…', 'Cargando…', 'Chargement…');
  a('Accedi come coach', 'Sign in as coach', 'Entra como entrenador', 'Connexion entraîneur');
  a('Usa lo stesso account che usi in REVOS Analyst.', 'Use the same account you use in REVOS Analyst.', 'Usa la misma cuenta que usas en REVOS Analyst.', 'Utilisez le même compte que dans REVOS Analyst.');
  a('oppure', 'or', 'o', 'ou');
  a('Accedi con Google', 'Sign in with Google', 'Entrar con Google', 'Se connecter avec Google');
  a('Crea la tua squadra', 'Create your team', 'Crea tu equipo', 'Créez votre équipe');
  a('Si fa una volta sola. Poi aggiungi i giocatori e assegni i video.', 'You only do this once. Then add your players and assign videos.', 'Solo se hace una vez. Después añades jugadores y asignas vídeos.', 'Une seule fois. Ensuite, ajoutez vos joueurs et assignez des vidéos.');
  a('Nome squadra', 'Team name', 'Nombre del equipo', 'Nom de l’équipe');
  a('Il tuo nome', 'Your name', 'Tu nombre', 'Votre nom');
  a('Crea squadra', 'Create team', 'Crear equipo', 'Créer l’équipe');
  a('Attività', 'Activity', 'Actividad', 'Activité');
  a('Assegna', 'Assign', 'Asignar', 'Assigner');
  a('Nuovo giocatore', 'New player', 'Nuevo jugador', 'Nouveau joueur');
  a('Crea l’accesso del giocatore: poi gli comunichi email e password.', 'Create the player’s login, then give them the email and password.', 'Crea el acceso del jugador y después le comunicas el correo y la contraseña.', 'Créez l’accès du joueur, puis communiquez-lui l’e-mail et le mot de passe.');
  a('Nome e cognome', 'Full name', 'Nombre y apellidos', 'Nom et prénom');
  a('Numero', 'Number', 'Número', 'Numéro');
  a('Password (min. 6)', 'Password (min. 6)', 'Contraseña (mín. 6)', 'Mot de passe (min. 6)');
  a('Crea giocatore', 'Create player', 'Crear jugador', 'Créer le joueur');
  a('I tuoi giocatori', 'Your players', 'Tus jugadores', 'Vos joueurs');
  a('Crea gruppi (es. Portieri, Difesa, Ali) per assegnare un video a tutti con un clic.', 'Create groups (e.g. Goalkeepers, Defence, Wings) to assign a video to everyone with one click.', 'Crea grupos (p. ej. Porteros, Defensa, Extremos) para asignar un vídeo a todos con un clic.', 'Créez des groupes (ex. Gardiens, Défense, Ailiers) pour assigner une vidéo à tous en un clic.');
  a('Nome del gruppo', 'Group name', 'Nombre del grupo', 'Nom du groupe');
  a('Giocatori del gruppo', 'Players in the group', 'Jugadores del grupo', 'Joueurs du groupe');
  a('Salva gruppo', 'Save group', 'Guardar grupo', 'Enregistrer le groupe');
  a('Aggiorna gruppo', 'Update group', 'Actualizar grupo', 'Mettre à jour le groupe');
  a('Annulla modifica', 'Cancel edit', 'Cancelar edición', 'Annuler la modification');
  a('Carica un video', 'Upload a video', 'Sube un vídeo', 'Téléverser une vidéo');
  a('Un file MP4 (un clip o un’esportazione di REVOS Analyst). Resta archiviato una volta sola.', 'An MP4 file (a clip or an export from REVOS Analyst). It is stored only once.', 'Un archivo MP4 (un clip o una exportación de REVOS Analyst). Se guarda una sola vez.', 'Un fichier MP4 (un clip ou un export de REVOS Analyst). Il n’est stocké qu’une seule fois.');
  a('File video', 'Video file', 'Archivo de vídeo', 'Fichier vidéo');
  a('Titolo', 'Title', 'Título', 'Titre');
  a('Partita o allenamento', 'Match or training', 'Partido o entrenamiento', 'Match ou entraînement');
  a('Data', 'Date', 'Fecha', 'Date');
  a('Tag (separati da virgola)', 'Tags (comma-separated)', 'Etiquetas (separadas por comas)', 'Tags (séparés par des virgules)');
  a('Carica', 'Upload', 'Subir', 'Téléverser');
  a('La tua libreria', 'Your library', 'Tu biblioteca', 'Votre bibliothèque');
  a('Assegna video', 'Assign videos', 'Asignar vídeos', 'Assigner des vidéos');
  a('Scegli i video e i giocatori. Ogni giocatore vedrà solo quello che gli assegni.', 'Choose the videos and the players. Each player will only see what you assign to them.', 'Elige los vídeos y los jugadores. Cada jugador solo verá lo que le asignes.', 'Choisissez les vidéos et les joueurs. Chaque joueur ne verra que ce que vous lui assignez.');
  a('Nota dell’allenatore', 'Coach’s note', 'Nota del entrenador', 'Note de l’entraîneur');
  a('Segna come importante', 'Mark as important', 'Marcar como importante', 'Marquer comme important');
  a('Attività dei giocatori', 'Player activity', 'Actividad de los jugadores', 'Activité des joueurs');
  a('Quanto i giocatori usano i video che assegni.', 'How much players use the videos you assign.', 'Cuánto usan los jugadores los vídeos que asignas.', 'Combien les joueurs utilisent les vidéos que vous assignez.');
  a('Stato per video', 'Status by video', 'Estado por vídeo', 'État par vidéo');
  a('Guarda soprattutto il timing dell’uscita…', 'Pay special attention to the timing of the exit…', 'Fíjate sobre todo en el timing de la salida…', 'Regarde surtout le timing de la sortie…');
  a('Portieri', 'Goalkeepers', 'Porteros', 'Gardiens');
  a('Germania', 'Germany', 'Alemania', 'Allemagne');
  a('Germania, Attacco', 'Germany, Attack', 'Alemania, Ataque', 'Allemagne, Attaque');
  a('Nessun giocatore: aggiungine uno qui sopra.', 'No players yet: add one above.', 'Ningún jugador: añade uno arriba.', 'Aucun joueur : ajoutez-en un ci-dessus.');
  a('Aggiungi prima i giocatori.', 'Add the players first.', 'Añade primero los jugadores.', 'Ajoutez d’abord les joueurs.');
  a('Modifica', 'Edit', 'Editar', 'Modifier');
  a('Elimina', 'Delete', 'Eliminar', 'Supprimer');
  a('Conferma elimina', 'Confirm delete', 'Confirmar eliminar', 'Confirmer la suppression');
  a('Tutti', 'All', 'Todos', 'Tous');
  a('Nessun gruppo ancora.', 'No groups yet.', 'Aún no hay grupos.', 'Aucun groupe pour l’instant.');
  a('Ancora nessun video caricato.', 'No videos uploaded yet.', 'Aún no hay vídeos subidos.', 'Aucune vidéo téléversée pour l’instant.');
  a('Carica prima un video nella scheda Video.', 'Upload a video first in the Video tab.', 'Sube primero un vídeo en la pestaña Vídeo.', 'Téléversez d’abord une vidéo dans l’onglet Vidéo.');
  a('Aggiungi i giocatori nella scheda Giocatori.', 'Add players in the Players tab.', 'Añade jugadores en la pestaña Jugadores.', 'Ajoutez des joueurs dans l’onglet Joueurs.');
  a('Non assegnato', 'Not assigned', 'No asignado', 'Non assigné');
  a('Nessun video.', 'No videos.', 'Ningún vídeo.', 'Aucune vidéo.');
  a('Accesso Google non permesso da questo indirizzo. Aggiungilo nei domini autorizzati di Firebase.', 'Google sign-in is not allowed from this address. Add it to the authorized domains in Firebase.', 'El acceso con Google no está permitido desde esta dirección. Añádela a los dominios autorizados de Firebase.', 'La connexion Google n’est pas autorisée depuis cette adresse. Ajoutez-la aux domaines autorisés de Firebase.');
  a('Creo l’accesso…', 'Creating the login…', 'Creando el acceso…', 'Création de l’accès…');
  a('Carico il video…', 'Loading the video…', 'Cargando el vídeo…', 'Chargement de la vidéo…');
  a('Video caricato. Ora puoi assegnarlo.', 'Video uploaded. You can assign it now.', 'Vídeo subido. Ya puedes asignarlo.', 'Vidéo téléversée. Vous pouvez l’assigner maintenant.');
  a('Scegli almeno un video e un giocatore.', 'Choose at least one video and one player.', 'Elige al menos un vídeo y un jugador.', 'Choisissez au moins une vidéo et un joueur.');
  a('Assegno…', 'Assigning…', 'Asignando…', 'Attribution…');
  a('Scrivi il nome del gruppo.', 'Enter the group name.', 'Escribe el nombre del grupo.', 'Saisissez le nom du groupe.');
  a('Scegli almeno un giocatore.', 'Choose at least one player.', 'Elige al menos un jugador.', 'Choisissez au moins un joueur.');
  a('Gruppo salvato.', 'Group saved.', 'Grupo guardado.', 'Groupe enregistré.');
  a('Permesso negato dalle regole di sicurezza. Controlla di essere entrato come coach.', 'Permission denied by the security rules. Check that you signed in as a coach.', 'Permiso denegado por las reglas de seguridad. Comprueba que has entrado como entrenador.', 'Autorisation refusée par les règles de sécurité. Vérifiez que vous êtes connecté comme entraîneur.');
  a('Esiste già un account con questa email.', 'An account with this email already exists.', 'Ya existe una cuenta con este correo.', 'Un compte existe déjà avec cet e-mail.');
  a('La password deve avere almeno 6 caratteri.', 'The password must be at least 6 characters.', 'La contraseña debe tener al menos 6 caracteres.', 'Le mot de passe doit contenir au moins 6 caractères.');
  a('Email non valida.', 'Invalid email.', 'Correo no válido.', 'E-mail invalide.');
  a('Account giocatore', 'Player account', 'Cuenta de jugador', 'Compte joueur');
  a('Questo accesso è per gli allenatori. Usa REVOS Player.', 'This login is for coaches. Use REVOS Player.', 'Este acceso es para entrenadores. Usa REVOS Player.', 'Cet accès est réservé aux entraîneurs. Utilisez REVOS Player.');

  /* ---------- Player ---------- */
  a('Il tuo allenatore', 'Your coach', 'Tu entrenador', 'Votre entraîneur');
  a('ti aspetta', 'is waiting for you', 'te espera', 'vous attend');
  a('Accedi con l’email e la password che ti ha dato lui.', 'Sign in with the email and password your coach gave you.', 'Entra con el correo y la contraseña que te dio tu entrenador.', 'Connectez-vous avec l’e-mail et le mot de passe donnés par votre entraîneur.');
  a('nome@email.it', 'name@email.com', 'nombre@correo.com', 'nom@email.fr');
  a('Password dimenticata?', 'Forgot your password?', '¿Olvidaste la contraseña?', 'Mot de passe oublié ?');
  a('Accesso…', 'Signing in…', 'Entrando…', 'Connexion…');
  a('Il tuo allenatore ha preparato dei video per te.', 'Your coach has prepared some videos for you.', 'Tu entrenador ha preparado vídeos para ti.', 'Votre entraîneur a préparé des vidéos pour vous.');
  a('Hai visto tutto. Ottimo lavoro.', 'You’ve seen everything. Great job.', 'Lo has visto todo. Buen trabajo.', 'Vous avez tout vu. Beau travail.');
  a('Quando il tuo allenatore ti assegna un video lo trovi qui.', 'When your coach assigns you a video, you’ll find it here.', 'Cuando tu entrenador te asigne un vídeo, lo encontrarás aquí.', 'Quand votre entraîneur vous assigne une vidéo, vous la trouverez ici.');
  a('Video da vedere', 'Videos to watch', 'Vídeos por ver', 'Vidéos à regarder');
  a('Niente da vedere', 'Nothing to watch', 'Nada por ver', 'Rien à regarder');
  a('Tocca per aprire la lista', 'Tap to open the list', 'Toca para abrir la lista', 'Touchez pour ouvrir la liste');
  a('Ti avviso quando ne arrivano di nuovi', 'I’ll let you know when new ones arrive', 'Te aviso cuando lleguen nuevos', 'Je vous préviens quand il en arrive de nouvelles');
  a('Video recenti', 'Recent videos', 'Vídeos recientes', 'Vidéos récentes');
  a('Ancora nessun video assegnato.', 'No videos assigned yet.', 'Aún no hay vídeos asignados.', 'Aucune vidéo assignée pour l’instant.');
  a('I miei video', 'My videos', 'Mis vídeos', 'Mes vidéos');
  a('Nessun video in questa lista.', 'No videos in this list.', 'Ningún vídeo en esta lista.', 'Aucune vidéo dans cette liste.');
  a('Preferiti', 'Favourites', 'Favoritos', 'Favoris');
  a('I video importanti e quelli che hai salvato.', 'Important videos and the ones you saved.', 'Los vídeos importantes y los que has guardado.', 'Les vidéos importantes et celles que vous avez enregistrées.');
  a('Tocca la stella dentro un video per salvarlo qui.', 'Tap the star inside a video to save it here.', 'Toca la estrella dentro de un vídeo para guardarlo aquí.', 'Touchez l’étoile dans une vidéo pour l’enregistrer ici.');
  a('Profilo', 'Profile', 'Perfil', 'Profil');
  a('Assegnati', 'Assigned', 'Asignados', 'Assignées');
  a('Visti', 'Seen', 'Vistos', 'Vues');
  a('Da vedere', 'To watch', 'Por ver', 'À voir');
  a('Ultima visualizzazione', 'Last viewed', 'Última visualización', 'Dernière vue');
  a('Vedi solo i video che il tuo allenatore ha assegnato a te. Nessun altro giocatore vede i tuoi.', 'You only see the videos your coach assigned to you. No other player sees yours.', 'Solo ves los vídeos que tu entrenador te ha asignado. Ningún otro jugador ve los tuyos.', 'Vous ne voyez que les vidéos que votre entraîneur vous a assignées. Aucun autre joueur ne voit les vôtres.');
  a('Per ricevere gli avvisi, aggiungi REVOS Player alla schermata Home e aprilo da lì.', 'To receive alerts, add REVOS Player to your Home Screen and open it from there.', 'Para recibir avisos, añade REVOS Player a la pantalla de inicio y ábrelo desde ahí.', 'Pour recevoir les alertes, ajoutez REVOS Player à l’écran d’accueil et ouvrez-le depuis là.');
  a('Le notifiche sono bloccate. Attivale dalle impostazioni del telefono per REVOS Player.', 'Notifications are blocked. Turn them on in your phone settings for REVOS Player.', 'Las notificaciones están bloqueadas. Actívalas en los ajustes del teléfono para REVOS Player.', 'Les notifications sont bloquées. Activez-les dans les réglages du téléphone pour REVOS Player.');
  a('Notifiche attive su questo telefono.', 'Notifications are on for this phone.', 'Notificaciones activas en este teléfono.', 'Notifications activées sur ce téléphone.');
  a('Ricevi un avviso quando il tuo allenatore ti assegna un video.', 'Get an alert when your coach assigns you a video.', 'Recibe un aviso cuando tu entrenador te asigne un vídeo.', 'Recevez une alerte quand votre entraîneur vous assigne une vidéo.');
  a('Questo browser non supporta le notifiche.', 'This browser doesn’t support notifications.', 'Este navegador no admite notificaciones.', 'Ce navigateur ne prend pas en charge les notifications.');
  a('Permesso non concesso.', 'Permission not granted.', 'Permiso no concedido.', 'Autorisation non accordée.');
  a('Nessun token ricevuto.', 'No token received.', 'No se recibió ningún token.', 'Aucun jeton reçu.');
  a('Password attuale', 'Current password', 'Contraseña actual', 'Mot de passe actuel');
  a('Nuova password (min. 6)', 'New password (min. 6)', 'Nueva contraseña (mín. 6)', 'Nouveau mot de passe (min. 6)');
  a('Ripeti la nuova password', 'Repeat the new password', 'Repite la nueva contraseña', 'Répétez le nouveau mot de passe');
  a('Salva password', 'Save password', 'Guardar contraseña', 'Enregistrer le mot de passe');
  a('La nuova password deve avere almeno 6 caratteri.', 'The new password must be at least 6 characters.', 'La nueva contraseña debe tener al menos 6 caracteres.', 'Le nouveau mot de passe doit contenir au moins 6 caractères.');
  a('Le due password nuove non coincidono.', 'The two new passwords don’t match.', 'Las dos contraseñas nuevas no coinciden.', 'Les deux nouveaux mots de passe ne correspondent pas.');
  a('La nuova password è uguale a quella attuale.', 'The new password is the same as the current one.', 'La nueva contraseña es igual a la actual.', 'Le nouveau mot de passe est identique à l’actuel.');
  a('Password cambiata. Da ora usa quella nuova.', 'Password changed. From now on use the new one.', 'Contraseña cambiada. A partir de ahora usa la nueva.', 'Mot de passe modifié. Utilisez désormais le nouveau.');
  a('La password attuale non è corretta.', 'The current password is not correct.', 'La contraseña actual no es correcta.', 'Le mot de passe actuel n’est pas correct.');
  a('La nuova password è troppo debole.', 'The new password is too weak.', 'La nueva contraseña es demasiado débil.', 'Le nouveau mot de passe est trop faible.');
  a('Troppi tentativi. Riprova tra qualche minuto.', 'Too many attempts. Try again in a few minutes.', 'Demasiados intentos. Inténtalo de nuevo en unos minutos.', 'Trop de tentatives. Réessayez dans quelques minutes.');
  a('Non riesco a cambiarla. Riprova.', 'I can’t change it. Try again.', 'No puedo cambiarla. Inténtalo de nuevo.', 'Impossible de la changer. Réessayez.');
  a('Indietro', 'Back', 'Atrás', 'Retour');
  a('Video non trovato.', 'Video not found.', 'Vídeo no encontrado.', 'Vidéo introuvable.');
  a('Preferito', 'Favourite', 'Favorito', 'Favori');
  a('Già da rivedere', 'Already to review', 'Ya para repasar', 'Déjà à revoir');
  a('Non riesco a caricare il video. Controlla la connessione e riprova.', 'I can’t load the video. Check your connection and try again.', 'No puedo cargar el vídeo. Comprueba la conexión e inténtalo de nuevo.', 'Impossible de charger la vidéo. Vérifiez la connexion et réessayez.');
  a('Note dell’allenatore', 'Coach’s notes', 'Notas del entrenador', 'Notes de l’entraîneur');
  a('Nessuna nota per questo video.', 'No notes for this video.', 'Sin notas para este vídeo.', 'Aucune note pour cette vidéo.');
  a('Navigazione', 'Navigation', 'Navegación', 'Navigation');
  a('Non sono riuscito a salvare', 'I couldn’t save', 'No he podido guardar', 'Impossible d’enregistrer');
  a('Controlla la connessione e riprova.', 'Check your connection and try again.', 'Comprueba la conexión e inténtalo de nuevo.', 'Vérifiez la connexion et réessayez.');
  a('Nuovo video dal tuo allenatore', 'New video from your coach', 'Nuevo vídeo de tu entrenador', 'Nouvelle vidéo de votre entraîneur');
  a('Non riesco a leggere i video', 'I can’t read the videos', 'No puedo leer los vídeos', 'Impossible de lire les vidéos');
  a('Riprova tra poco.', 'Try again shortly.', 'Inténtalo de nuevo en un momento.', 'Réessayez dans un instant.');
  a('Scrivi la tua email, poi tocca di nuovo “Password dimenticata?”.', 'Enter your email, then tap “Forgot your password?” again.', 'Escribe tu correo y toca de nuevo «¿Olvidaste la contraseña?».', 'Saisissez votre e-mail, puis touchez à nouveau « Mot de passe oublié ? ».');
  a('Ti ho mandato un’email per scegliere una nuova password.', 'I’ve sent you an email to choose a new password.', 'Te he enviado un correo para elegir una nueva contraseña.', 'Je vous ai envoyé un e-mail pour choisir un nouveau mot de passe.');
  a('Non riesco a mandare l’email. Controlla l’indirizzo.', 'I can’t send the email. Check the address.', 'No puedo enviar el correo. Comprueba la dirección.', 'Impossible d’envoyer l’e-mail. Vérifiez l’adresse.');

  /* ---------- pagine Area giocatori / Area allenatori ---------- */
  a('← Home', '← Home', '← Inicio', '← Accueil');
  a('Area giocatori', 'Player area', 'Área de jugadores', 'Espace joueurs');
  a('Area allenatori', 'Coach area', 'Área de entrenadores', 'Espace entraîneurs');
  a('I video del tuo allenatore, sempre con te sul telefono. Nessuna app da cercare negli store.', 'Your coach’s videos, always with you on your phone. No app to look for in the stores.', 'Los vídeos de tu entrenador, siempre contigo en el móvil. Sin buscar ninguna app en las tiendas.', 'Les vidéos de votre entraîneur, toujours avec vous sur votre téléphone. Aucune appli à chercher dans les stores.');
  a('Come si usa', 'How to use it', 'Cómo se usa', 'Comment ça marche');
  a('Apri il link qui sotto e accedi con email e password che ti ha dato il tuo allenatore.', 'Open the link below and sign in with the email and password your coach gave you.', 'Abre el enlace de abajo y entra con el correo y la contraseña que te dio tu entrenador.', 'Ouvrez le lien ci-dessous et connectez-vous avec l’e-mail et le mot de passe donnés par votre entraîneur.');
  a('Al primo accesso cambia la password (pulsante «Cambia password»).', 'The first time you sign in, change the password (“Change password” button).', 'En el primer acceso cambia la contraseña (botón «Cambiar contraseña»).', 'À la première connexion, changez le mot de passe (bouton « Changer le mot de passe »).');
  a('Premi «Attiva notifiche»: ti avviseremo quando arriva un nuovo video.', 'Tap “Turn on notifications”: we’ll alert you when a new video arrives.', 'Pulsa «Activar notificaciones»: te avisaremos cuando llegue un vídeo nuevo.', 'Touchez « Activer les notifications » : nous vous préviendrons à l’arrivée d’une nouvelle vidéo.');
  a('Guarda il video e premi «Segna come visto».', 'Watch the video and tap “Mark as seen”.', 'Mira el vídeo y pulsa «Marcar como visto».', 'Regardez la vidéo et touchez « Marquer comme vu ».');
  a('Installala sul telefono', 'Install it on your phone', 'Instálala en el móvil', 'Installez-la sur votre téléphone');
  a('iPhone', 'iPhone', 'iPhone', 'iPhone');
  a('Android', 'Android', 'Android', 'Android');
  a('Apri il link con', 'Open the link with', 'Abre el enlace con', 'Ouvrez le lien avec');
  a('Tocca il tasto Condividi', 'Tap the Share button', 'Toca el botón Compartir', 'Touchez le bouton Partager');
  a('Scegli «Aggiungi alla schermata Home»', 'Choose “Add to Home Screen”', 'Elige «Añadir a pantalla de inicio»', 'Choisissez « Sur l’écran d’accueil »');
  a('Apri l’icona REVOS dalla Home', 'Open the REVOS icon from your Home Screen', 'Abre el icono de REVOS desde la pantalla de inicio', 'Ouvrez l’icône REVOS depuis l’écran d’accueil');
  a('Tocca i tre puntini in alto', 'Tap the three dots at the top', 'Toca los tres puntos de arriba', 'Touchez les trois points en haut');
  a('Scegli «Installa app»', 'Choose “Install app”', 'Elige «Instalar aplicación»', 'Choisissez « Installer l’application »');
  a('Su iPhone le notifiche funzionano solo dopo aver aggiunto l’app alla Home (iOS 16.4 o successivo).', 'On iPhone, notifications only work after adding the app to your Home Screen (iOS 16.4 or later).', 'En iPhone las notificaciones solo funcionan después de añadir la app a la pantalla de inicio (iOS 16.4 o posterior).', 'Sur iPhone, les notifications ne fonctionnent qu’après avoir ajouté l’appli à l’écran d’accueil (iOS 16.4 ou ultérieur).');
  a('Privacy', 'Privacy', 'Privacidad', 'Confidentialité');
  a('Vedi solo i video che il tuo allenatore ha scelto per te.', 'You only see the videos your coach chose for you.', 'Solo ves los vídeos que tu entrenador ha elegido para ti.', 'Vous ne voyez que les vidéos que votre entraîneur a choisies pour vous.');
  a('L’allenatore vede se hai guardato il video e quando.', 'Your coach can see whether you watched the video and when.', 'El entrenador ve si has visto el vídeo y cuándo.', 'L’entraîneur voit si vous avez regardé la vidéo et quand.');
  a('Non vengono raccolti altri dati oltre a nome, email e numero di maglia.', 'No data is collected other than name, email and shirt number.', 'No se recogen más datos que nombre, correo y número de camiseta.', 'Aucune autre donnée n’est collectée en dehors du nom, de l’e-mail et du numéro de maillot.');
  a('Apri l’app giocatore', 'Open the player app', 'Abrir la app de jugador', 'Ouvrir l’appli joueur');
  a('Sei un allenatore? Vai all’Area allenatori', 'Are you a coach? Go to the Coach area', '¿Eres entrenador? Ve al Área de entrenadores', 'Vous êtes entraîneur ? Allez à l’Espace entraîneurs');
  a('Invia video e clip alla squadra, a gruppi o ai singoli, e sai chi li ha guardati.', 'Send videos and clips to the team, to groups or to individual players, and see who has watched them.', 'Envía vídeos y clips al equipo, a grupos o a jugadores concretos, y sabe quién los ha visto.', 'Envoyez vidéos et clips à l’équipe, à des groupes ou à des joueurs, et sachez qui les a regardés.');
  a('Come funziona', 'How it works', 'Cómo funciona', 'Comment ça marche');
  a('Accedi al pannello con il tuo account e crea la squadra.', 'Sign in to the panel with your account and create your team.', 'Entra en el panel con tu cuenta y crea el equipo.', 'Connectez-vous au panneau avec votre compte et créez l’équipe.');
  a('Aggiungi i giocatori: l’account viene creato in automatico, tu dai loro email e password.', 'Add your players: the account is created automatically, you give them their email and password.', 'Añade los jugadores: la cuenta se crea automáticamente y tú les das el correo y la contraseña.', 'Ajoutez les joueurs : le compte est créé automatiquement, vous leur donnez l’e-mail et le mot de passe.');
  a('Carica un video dal pannello, oppure invialo direttamente da REVOS Sports Analyst con «Invia ai giocatori».', 'Upload a video from the panel, or send it straight from REVOS Sports Analyst with “Send to players”.', 'Sube un vídeo desde el panel, o envíalo directamente desde REVOS Sports Analyst con «Enviar a los jugadores».', 'Téléversez une vidéo depuis le panneau, ou envoyez-la directement depuis REVOS Sports Analyst avec « Envoyer aux joueurs ».');
  a('Scegli a chi mandarlo e aggiungi una nota. Il giocatore riceve una notifica.', 'Choose who to send it to and add a note. The player gets a notification.', 'Elige a quién enviarlo y añade una nota. El jugador recibe una notificación.', 'Choisissez le destinataire et ajoutez une note. Le joueur reçoit une notification.');
  a('Controlla chi ha visto il video e quando.', 'Check who has watched the video and when.', 'Comprueba quién ha visto el vídeo y cuándo.', 'Vérifiez qui a regardé la vidéo et quand.');
  a('Crea gruppi (portieri, ali, difensori…) e invia un video a tutto il gruppo con un solo tocco.', 'Create groups (goalkeepers, wings, defenders…) and send a video to the whole group with one tap.', 'Crea grupos (porteros, extremos, defensas…) y envía un vídeo a todo el grupo con un solo toque.', 'Créez des groupes (gardiens, ailiers, défenseurs…) et envoyez une vidéo à tout le groupe en un seul geste.');
  a('Da REVOS Sports Analyst', 'From REVOS Sports Analyst', 'Desde REVOS Sports Analyst', 'Depuis REVOS Sports Analyst');
  a('Dopo aver esportato una clip, premi «Invia ai giocatori»: scegli giocatori o gruppi e il video parte.', 'After exporting a clip, tap “Send to players”: choose players or groups and the video is sent.', 'Tras exportar un clip, pulsa «Enviar a los jugadores»: elige jugadores o grupos y el vídeo se envía.', 'Après avoir exporté un clip, touchez « Envoyer aux joueurs » : choisissez joueurs ou groupes et la vidéo part.');
  a('Un solo account', 'One account', 'Una sola cuenta', 'Un seul compte');
  a('Usa la stessa email e password (o lo stesso accesso Google) in tutti e due: pannello allenatore e REVOS Sports Analyst. Se in Analyst entri con un altro account, non trova la tua squadra e non puoi inviare video.', 'Use the same email and password (or the same Google sign-in) in both the coach panel and REVOS Sports Analyst. If you sign in to Analyst with a different account, it won’t find your team and you can’t send videos.', 'Usa el mismo correo y contraseña (o el mismo acceso con Google) en los dos: panel de entrenador y REVOS Sports Analyst. Si en Analyst entras con otra cuenta, no encuentra tu equipo y no puedes enviar vídeos.', 'Utilisez le même e-mail et mot de passe (ou la même connexion Google) dans les deux : panneau entraîneur et REVOS Sports Analyst. Si vous vous connectez à Analyst avec un autre compte, il ne trouve pas votre équipe et vous ne pouvez pas envoyer de vidéos.');
  a('Per i giocatori: mandagli il link della pagina Area giocatori, spiega come installare l’app e come accedere.', 'For your players: send them the link to the Player area page and explain how to install the app and sign in.', 'Para los jugadores: envíales el enlace de la página Área de jugadores y explícales cómo instalar la app y cómo entrar.', 'Pour les joueurs : envoyez-leur le lien de la page Espace joueurs et expliquez comment installer l’appli et se connecter.');
  a('Apri il pannello allenatore', 'Open the coach panel', 'Abrir el panel de entrenador', 'Ouvrir le panneau entraîneur');
  a('Sei un giocatore? Vai all’Area giocatori', 'Are you a player? Go to the Player area', '¿Eres jugador? Ve al Área de jugadores', 'Vous êtes joueur ? Allez à l’Espace joueurs');

  a('Elimino…', 'Deleting…', 'Eliminando…', 'Suppression…');
  a('Giocatore eliminato.', 'Player deleted.', 'Jugador eliminado.', 'Joueur supprimé.');
  a('Non riesco a eliminare il giocatore. Riprova.', 'I can’t delete the player. Try again.', 'No puedo eliminar al jugador. Inténtalo de nuevo.', 'Impossible de supprimer le joueur. Réessayez.');
  /* REVOS-COMUNICAZIONI */
  a('Convocazione', 'Call-up', 'Convocatoria', 'Convocation', 'Nominierung', 'Convocatória', 'Poziv');
  a('Letto', 'Read', 'Leído', 'Lu', 'Gelesen', 'Lido', 'Pročitano');
  a('Ho letto', 'I’ve read it', 'Leído', 'J’ai lu', 'Gelesen', 'Li', 'Pročitao sam');
  a('Comunicazioni', 'Messages', 'Comunicaciones', 'Communications', 'Mitteilungen', 'Comunicações', 'Obavijesti');
  a('Avvisi', 'Messages', 'Avisos', 'Messages', 'Nachrichten', 'Avisos', 'Obavijesti');
  a('Nuove comunicazioni', 'New messages', 'Nuevas comunicaciones', 'Nouvelles communications', 'Neue Mitteilungen', 'Novas comunicações', 'Nove obavijesti');
  a('Convocazioni e avvisi del tuo allenatore.', 'Call-ups and messages from your coach.', 'Convocatorias y avisos de tu entrenador.', 'Convocations et messages de votre entraîneur.', 'Nominierungen und Mitteilungen deines Trainers.', 'Convocatórias e avisos do teu treinador.', 'Pozivi i obavijesti tvog trenera.');
  a('Nessuna comunicazione per ora.', 'No messages yet.', 'Ninguna comunicación por ahora.', 'Aucune communication pour l’instant.', 'Noch keine Mitteilungen.', 'Nenhuma comunicação por agora.', 'Zasad nema obavijesti.');
  a('Orario ritrovo', 'Meeting time', 'Hora de encuentro', 'Heure du rendez-vous', 'Treffpunkt-Uhrzeit', 'Hora de encontro', 'Vrijeme okupljanja');
  a('Luogo ritrovo', 'Meeting point', 'Lugar de encuentro', 'Lieu du rendez-vous', 'Treffpunkt', 'Local de encontro', 'Mjesto okupljanja');
  a('Orario gara', 'Match time', 'Hora del partido', 'Heure du match', 'Spielbeginn', 'Hora do jogo', 'Vrijeme utakmice');
  a('Luogo gara', 'Match venue', 'Lugar del partido', 'Lieu du match', 'Spielort', 'Local do jogo', 'Mjesto utakmice');
  a('Convocati', 'Called-up players', 'Convocados', 'Joueurs convoqués', 'Nominierte Spieler', 'Convocados', 'Pozvani igrači');
  a('Riserve a casa', 'Reserves at home', 'Reservas en casa', 'Réservistes à la maison', 'Reserve (zu Hause)', 'Reservas em casa', 'Rezerve kod kuće');
  a('Nuova comunicazione dal tuo allenatore', 'New message from your coach', 'Nueva comunicación de tu entrenador', 'Nouvelle communication de votre entraîneur', 'Neue Mitteilung von deinem Trainer', 'Nova comunicação do teu treinador', 'Nova obavijest od tvog trenera');

  /* REVOS-7LINGUE: tedesco / portoghese / croato per le voci esistenti */
  b("Email", "E-Mail", "Email", "E-pošta");
  b("Password", "Passwort", "Palavra-passe", "Lozinka");
  b("Entra", "Anmelden", "Entrar", "Prijava");
  b("Esci", "Abmelden", "Sair", "Odjava");
  b("Video", "Videos", "Vídeos", "Videozapisi");
  b("Visto", "Gesehen", "Visto", "Pogledano");
  b("Nuovo", "Neu", "Novo", "Novo");
  b("Da rivedere", "Nochmal ansehen", "Para rever", "Za ponoviti");
  b("Importante", "Wichtig", "Importante", "Važno");
  b("★ Importante", "★ Wichtig", "★ Importante", "★ Važno");
  b("nessuna", "keine", "nenhuma", "nema");
  b("Email o password non corrette.", "E-Mail oder Passwort falsch.", "Email ou palavra-passe incorretos.", "Pogrešna e-pošta ili lozinka.");
  b("Nessuna connessione. Riprova.", "Keine Verbindung. Versuch es noch einmal.", "Sem ligação. Tenta novamente.", "Nema veze. Pokušaj ponovno.");
  b("Cambia password", "Passwort ändern", "Alterar palavra-passe", "Promijeni lozinku");
  b("Attiva notifiche", "Benachrichtigungen aktivieren", "Ativar notificações", "Uključi obavijesti");
  b("Segna come visto", "Als gesehen markieren", "Marcar como visto", "Označi kao pogledano");
  b("Gruppi", "Gruppen", "Grupos", "Grupe");
  b("Giocatori", "Spieler", "Jogadores", "Igrači");
  b("Home", "Start", "Início", "Početna");
  b("Caricamento…", "Lädt…", "A carregar…", "Učitavanje…");
  b("Accedi come coach", "Als Trainer anmelden", "Entrar como treinador", "Prijava za trenera");
  b("Usa lo stesso account che usi in REVOS Analyst.", "Verwende dasselbe Konto wie in REVOS Analyst.", "Usa a mesma conta que usas no REVOS Analyst.", "Koristi isti račun kao u aplikaciji REVOS Analyst.");
  b("oppure", "oder", "ou", "ili");
  b("Accedi con Google", "Mit Google anmelden", "Entrar com o Google", "Prijava putem Googlea");
  b("Crea la tua squadra", "Erstelle dein Team", "Cria a tua equipa", "Stvori svoju momčad");
  b("Si fa una volta sola. Poi aggiungi i giocatori e assegni i video.", "Das machst du nur einmal. Danach fügst du Spieler hinzu und weist Videos zu.", "Só fazes isto uma vez. Depois adicionas os jogadores e atribuis vídeos.", "To radiš samo jednom. Zatim dodaješ igrače i dodjeljuješ videozapise.");
  b("Nome squadra", "Teamname", "Nome da equipa", "Naziv momčadi");
  b("Il tuo nome", "Dein Name", "O teu nome", "Tvoje ime");
  b("Crea squadra", "Team erstellen", "Criar equipa", "Stvori momčad");
  b("Attività", "Aktivität", "Atividade", "Aktivnost");
  b("Assegna", "Zuweisen", "Atribuir", "Dodijeli");
  b("Nuovo giocatore", "Neuer Spieler", "Novo jogador", "Novi igrač");
  b("Crea l’accesso del giocatore: poi gli comunichi email e password.", "Lege den Zugang für den Spieler an und gib ihm dann E-Mail und Passwort.", "Cria o acesso do jogador e depois dá-lhe o email e a palavra-passe.", "Stvori pristup za igrača, a zatim mu daj e-poštu i lozinku.");
  b("Nome e cognome", "Vor- und Nachname", "Nome completo", "Ime i prezime");
  b("Numero", "Nummer", "Número", "Broj");
  b("Password (min. 6)", "Passwort (mind. 6)", "Palavra-passe (mín. 6)", "Lozinka (najmanje 6)");
  b("Crea giocatore", "Spieler erstellen", "Criar jogador", "Stvori igrača");
  b("I tuoi giocatori", "Deine Spieler", "Os teus jogadores", "Tvoji igrači");
  b("Crea gruppi (es. Portieri, Difesa, Ali) per assegnare un video a tutti con un clic.", "Erstelle Gruppen (z. B. Torhüter, Abwehr, Außen), um ein Video mit einem Klick allen zuzuweisen.", "Cria grupos (por ex. Guarda-redes, Defesa, Extremos) para atribuir um vídeo a todos com um clique.", "Stvori grupe (npr. Vratari, Obrana, Krila) kako bi jednim klikom dodijelio videozapis svima.");
  b("Nome del gruppo", "Gruppenname", "Nome do grupo", "Naziv grupe");
  b("Giocatori del gruppo", "Spieler in der Gruppe", "Jogadores do grupo", "Igrači u grupi");
  b("Salva gruppo", "Gruppe speichern", "Guardar grupo", "Spremi grupu");
  b("Aggiorna gruppo", "Gruppe aktualisieren", "Atualizar grupo", "Ažuriraj grupu");
  b("Annulla modifica", "Bearbeitung abbrechen", "Cancelar edição", "Odustani od izmjene");
  b("Carica un video", "Video hochladen", "Carregar um vídeo", "Učitaj videozapis");
  b("Un file MP4 (un clip o un’esportazione di REVOS Analyst). Resta archiviato una volta sola.", "Eine MP4-Datei (ein Clip oder ein Export aus REVOS Analyst). Sie wird nur einmal gespeichert.", "Um ficheiro MP4 (um clipe ou uma exportação do REVOS Analyst). Fica guardado apenas uma vez.", "MP4 datoteka (isječak ili izvoz iz aplikacije REVOS Analyst). Sprema se samo jednom.");
  b("File video", "Videodatei", "Ficheiro de vídeo", "Videodatoteka");
  b("Titolo", "Titel", "Título", "Naslov");
  b("Partita o allenamento", "Spiel oder Training", "Jogo ou treino", "Utakmica ili trening");
  b("Data", "Datum", "Data", "Datum");
  b("Tag (separati da virgola)", "Tags (durch Komma getrennt)", "Etiquetas (separadas por vírgula)", "Oznake (odvojene zarezom)");
  b("Carica", "Hochladen", "Carregar", "Učitaj");
  b("La tua libreria", "Deine Bibliothek", "A tua biblioteca", "Tvoja knjižnica");
  b("Assegna video", "Videos zuweisen", "Atribuir vídeos", "Dodijeli videozapise");
  b("Scegli i video e i giocatori. Ogni giocatore vedrà solo quello che gli assegni.", "Wähle die Videos und die Spieler aus. Jeder Spieler sieht nur, was du ihm zuweist.", "Escolhe os vídeos e os jogadores. Cada jogador verá apenas o que lhe atribuíres.", "Odaberi videozapise i igrače. Svaki igrač vidi samo ono što mu dodijeliš.");
  b("Nota dell’allenatore", "Notiz des Trainers", "Nota do treinador", "Trenerova bilješka");
  b("Segna come importante", "Als wichtig markieren", "Marcar como importante", "Označi kao važno");
  b("Attività dei giocatori", "Aktivität der Spieler", "Atividade dos jogadores", "Aktivnost igrača");
  b("Quanto i giocatori usano i video che assegni.", "Wie intensiv die Spieler die zugewiesenen Videos nutzen.", "Quanto os jogadores utilizam os vídeos que atribuis.", "Koliko igrači koriste videozapise koje dodjeljuješ.");
  b("Stato per video", "Status pro Video", "Estado por vídeo", "Status po videozapisu");
  b("Guarda soprattutto il timing dell’uscita…", "Achte vor allem auf das Timing des Absprungs…", "Presta atenção sobretudo ao timing da saída…", "Obrati pažnju osobito na tajming izlaska…");
  b("Portieri", "Torhüter", "Guarda-redes", "Vratari");
  b("Germania", "Deutschland", "Alemanha", "Njemačka");
  b("Germania, Attacco", "Deutschland, Angriff", "Alemanha, Ataque", "Njemačka, Napad");
  b("Nessun giocatore: aggiungine uno qui sopra.", "Noch keine Spieler: Füge oben einen hinzu.", "Ainda sem jogadores: adiciona um acima.", "Još nema igrača: dodaj jednog iznad.");
  b("Aggiungi prima i giocatori.", "Füge zuerst die Spieler hinzu.", "Adiciona primeiro os jogadores.", "Prvo dodaj igrače.");
  b("Modifica", "Bearbeiten", "Editar", "Uredi");
  b("Elimina", "Löschen", "Eliminar", "Izbriši");
  b("Conferma elimina", "Löschen bestätigen", "Confirmar eliminação", "Potvrdi brisanje");
  b("Tutti", "Alle", "Todos", "Svi");
  b("Nessun gruppo ancora.", "Noch keine Gruppen.", "Ainda sem grupos.", "Još nema grupa.");
  b("Ancora nessun video caricato.", "Noch kein Video hochgeladen.", "Ainda sem vídeos carregados.", "Još nije učitan nijedan videozapis.");
  b("Carica prima un video nella scheda Video.", "Lade zuerst im Tab „Video“ ein Video hoch.", "Carrega primeiro um vídeo no separador Vídeos.", "Prvo učitaj videozapis na kartici Videozapisi.");
  b("Aggiungi i giocatori nella scheda Giocatori.", "Füge die Spieler im Tab „Spieler“ hinzu.", "Adiciona os jogadores no separador Jogadores.", "Dodaj igrače na kartici Igrači.");
  b("Non assegnato", "Nicht zugewiesen", "Não atribuído", "Nije dodijeljeno");
  b("Nessun video.", "Keine Videos.", "Sem vídeos.", "Nema videozapisa.");
  b("Accesso Google non permesso da questo indirizzo. Aggiungilo nei domini autorizzati di Firebase.", "Google-Anmeldung von dieser Adresse aus nicht erlaubt. Füge sie in Firebase zu den autorisierten Domains hinzu.", "Início de sessão com o Google não permitido a partir deste endereço. Adiciona-o aos domínios autorizados do Firebase.", "Prijava putem Googlea nije dopuštena s ove adrese. Dodaj je u ovlaštene domene u Firebaseu.");
  b("Creo l’accesso…", "Zugang wird erstellt…", "A criar o acesso…", "Stvaram pristup…");
  b("Carico il video…", "Video wird hochgeladen…", "A carregar o vídeo…", "Učitavam videozapis…");
  b("Video caricato. Ora puoi assegnarlo.", "Video hochgeladen. Du kannst es jetzt zuweisen.", "Vídeo carregado. Já o podes atribuir.", "Videozapis je učitan. Sada ga možeš dodijeliti.");
  b("Scegli almeno un video e un giocatore.", "Wähle mindestens ein Video und einen Spieler aus.", "Escolhe pelo menos um vídeo e um jogador.", "Odaberi barem jedan videozapis i jednog igrača.");
  b("Assegno…", "Wird zugewiesen…", "A atribuir…", "Dodjeljujem…");
  b("Scrivi il nome del gruppo.", "Gib den Gruppennamen ein.", "Escreve o nome do grupo.", "Upiši naziv grupe.");
  b("Scegli almeno un giocatore.", "Wähle mindestens einen Spieler aus.", "Escolhe pelo menos um jogador.", "Odaberi barem jednog igrača.");
  b("Gruppo salvato.", "Gruppe gespeichert.", "Grupo guardado.", "Grupa je spremljena.");
  b("Permesso negato dalle regole di sicurezza. Controlla di essere entrato come coach.", "Zugriff durch die Sicherheitsregeln verweigert. Prüfe, ob du als Trainer angemeldet bist.", "Permissão negada pelas regras de segurança. Verifica se entraste como treinador.", "Sigurnosna pravila su odbila pristup. Provjeri jesi li prijavljen kao trener.");
  b("Esiste già un account con questa email.", "Mit dieser E-Mail existiert bereits ein Konto.", "Já existe uma conta com este email.", "Račun s ovom e-poštom već postoji.");
  b("La password deve avere almeno 6 caratteri.", "Das Passwort muss mindestens 6 Zeichen lang sein.", "A palavra-passe deve ter pelo menos 6 caracteres.", "Lozinka mora imati najmanje 6 znakova.");
  b("Email non valida.", "Ungültige E-Mail.", "Email inválido.", "Neispravna e-pošta.");
  b("Account giocatore", "Spielerkonto", "Conta de jogador", "Račun igrača");
  b("Questo accesso è per gli allenatori. Usa REVOS Player.", "Diese Anmeldung ist für Trainer. Nutze REVOS Player.", "Este acesso é para treinadores. Usa o REVOS Player.", "Ova prijava je za trenere. Koristi REVOS Player.");
  b("Il tuo allenatore", "Dein Trainer", "O teu treinador", "Tvoj trener");
  b("ti aspetta", "wartet auf dich", "está à tua espera", "te čeka");
  b("Accedi con l’email e la password che ti ha dato lui.", "Melde dich mit der E-Mail und dem Passwort an, die dein Trainer dir gegeben hat.", "Entra com o email e a palavra-passe que o teu treinador te deu.", "Prijavi se e-poštom i lozinkom koje ti je dao trener.");
  b("nome@email.it", "name@email.de", "nome@email.pt", "ime@email.hr");
  b("Password dimenticata?", "Passwort vergessen?", "Esqueceste-te da palavra-passe?", "Zaboravio si lozinku?");
  b("Accesso…", "Anmeldung…", "A entrar…", "Prijava…");
  b("Il tuo allenatore ha preparato dei video per te.", "Dein Trainer hat Videos für dich vorbereitet.", "O teu treinador preparou vídeos para ti.", "Tvoj trener ti je pripremio videozapise.");
  b("Hai visto tutto. Ottimo lavoro.", "Du hast alles gesehen. Gute Arbeit.", "Já viste tudo. Excelente trabalho.", "Pogledao si sve. Odličan posao.");
  b("Quando il tuo allenatore ti assegna un video lo trovi qui.", "Wenn dein Trainer dir ein Video zuweist, findest du es hier.", "Quando o teu treinador te atribuir um vídeo, encontras aqui.", "Kada ti trener dodijeli videozapis, pronaći ćeš ga ovdje.");
  b("Video da vedere", "Videos zum Ansehen", "Vídeos para ver", "Videozapisi za pogledati");
  b("Niente da vedere", "Nichts anzusehen", "Nada para ver", "Nema ničega za pogledati");
  b("Tocca per aprire la lista", "Tippen, um die Liste zu öffnen", "Toca para abrir a lista", "Dodirni za otvaranje popisa");
  b("Ti avviso quando ne arrivano di nuovi", "Ich sage dir Bescheid, wenn neue kommen", "Aviso-te quando chegarem novos", "Javit ću ti kad stignu novi");
  b("Video recenti", "Neueste Videos", "Vídeos recentes", "Nedavni videozapisi");
  b("Ancora nessun video assegnato.", "Noch keine Videos zugewiesen.", "Ainda sem vídeos atribuídos.", "Još nema dodijeljenih videozapisa.");
  b("I miei video", "Meine Videos", "Os meus vídeos", "Moji videozapisi");
  b("Nessun video in questa lista.", "Keine Videos in dieser Liste.", "Sem vídeos nesta lista.", "Nema videozapisa na ovom popisu.");
  b("Preferiti", "Favoriten", "Favoritos", "Favoriti");
  b("I video importanti e quelli che hai salvato.", "Die wichtigen Videos und die, die du gespeichert hast.", "Os vídeos importantes e os que guardaste.", "Važni videozapisi i oni koje si spremio.");
  b("Tocca la stella dentro un video per salvarlo qui.", "Tippe im Video auf den Stern, um es hier zu speichern.", "Toca na estrela dentro de um vídeo para o guardar aqui.", "Dodirni zvjezdicu u videozapisu da ga spremiš ovdje.");
  b("Profilo", "Profil", "Perfil", "Profil");
  b("Assegnati", "Zugewiesen", "Atribuídos", "Dodijeljeno");
  b("Visti", "Gesehen", "Vistos", "Pogledano");
  b("Da vedere", "Zum Ansehen", "Por ver", "Za pogledati");
  b("Ultima visualizzazione", "Zuletzt angesehen", "Última visualização", "Zadnji pregled");
  b("Vedi solo i video che il tuo allenatore ha assegnato a te. Nessun altro giocatore vede i tuoi.", "Du siehst nur die Videos, die dein Trainer dir zugewiesen hat. Kein anderer Spieler sieht deine.", "Só vês os vídeos que o teu treinador te atribuiu. Nenhum outro jogador vê os teus.", "Vidiš samo videozapise koje ti je dodijelio trener. Nijedan drugi igrač ne vidi tvoje.");
  b("Per ricevere gli avvisi, aggiungi REVOS Player alla schermata Home e aprilo da lì.", "Um Benachrichtigungen zu erhalten, füge REVOS Player zum Home-Bildschirm hinzu und öffne die App von dort.", "Para receberes avisos, adiciona o REVOS Player ao ecrã principal e abre-o a partir daí.", "Da bi primao obavijesti, dodaj REVOS Player na početni zaslon i otvori ga odande.");
  b("Le notifiche sono bloccate. Attivale dalle impostazioni del telefono per REVOS Player.", "Benachrichtigungen sind blockiert. Aktiviere sie in den Telefoneinstellungen für REVOS Player.", "As notificações estão bloqueadas. Ativa-as nas definições do telemóvel para o REVOS Player.", "Obavijesti su blokirane. Uključi ih u postavkama telefona za REVOS Player.");
  b("Notifiche attive su questo telefono.", "Benachrichtigungen sind auf diesem Telefon aktiv.", "Notificações ativas neste telemóvel.", "Obavijesti su uključene na ovom telefonu.");
  b("Ricevi un avviso quando il tuo allenatore ti assegna un video.", "Erhalte eine Benachrichtigung, wenn dein Trainer dir ein Video zuweist.", "Recebe um aviso quando o teu treinador te atribuir um vídeo.", "Primi obavijest kada ti trener dodijeli videozapis.");
  b("Questo browser non supporta le notifiche.", "Dieser Browser unterstützt keine Benachrichtigungen.", "Este navegador não suporta notificações.", "Ovaj preglednik ne podržava obavijesti.");
  b("Permesso non concesso.", "Berechtigung nicht erteilt.", "Permissão não concedida.", "Dopuštenje nije odobreno.");
  b("Nessun token ricevuto.", "Kein Token erhalten.", "Nenhum token recebido.", "Token nije primljen.");
  b("Password attuale", "Aktuelles Passwort", "Palavra-passe atual", "Trenutna lozinka");
  b("Nuova password (min. 6)", "Neues Passwort (mind. 6)", "Nova palavra-passe (mín. 6)", "Nova lozinka (najmanje 6)");
  b("Ripeti la nuova password", "Neues Passwort wiederholen", "Repete a nova palavra-passe", "Ponovi novu lozinku");
  b("Salva password", "Passwort speichern", "Guardar palavra-passe", "Spremi lozinku");
  b("La nuova password deve avere almeno 6 caratteri.", "Das neue Passwort muss mindestens 6 Zeichen lang sein.", "A nova palavra-passe deve ter pelo menos 6 caracteres.", "Nova lozinka mora imati najmanje 6 znakova.");
  b("Le due password nuove non coincidono.", "Die beiden neuen Passwörter stimmen nicht überein.", "As duas novas palavras-passe não coincidem.", "Dvije nove lozinke se ne podudaraju.");
  b("La nuova password è uguale a quella attuale.", "Das neue Passwort ist identisch mit dem aktuellen.", "A nova palavra-passe é igual à atual.", "Nova lozinka jednaka je trenutnoj.");
  b("Password cambiata. Da ora usa quella nuova.", "Passwort geändert. Verwende ab jetzt das neue.", "Palavra-passe alterada. A partir de agora usa a nova.", "Lozinka je promijenjena. Od sada koristi novu.");
  b("La password attuale non è corretta.", "Das aktuelle Passwort ist nicht korrekt.", "A palavra-passe atual não está correta.", "Trenutna lozinka nije točna.");
  b("La nuova password è troppo debole.", "Das neue Passwort ist zu schwach.", "A nova palavra-passe é demasiado fraca.", "Nova lozinka je preslaba.");
  b("Troppi tentativi. Riprova tra qualche minuto.", "Zu viele Versuche. Versuch es in ein paar Minuten noch einmal.", "Demasiadas tentativas. Tenta novamente dentro de alguns minutos.", "Previše pokušaja. Pokušaj ponovno za nekoliko minuta.");
  b("Non riesco a cambiarla. Riprova.", "Ich kann es nicht ändern. Versuch es noch einmal.", "Não consegui alterá-la. Tenta novamente.", "Ne mogu je promijeniti. Pokušaj ponovno.");
  b("Indietro", "Zurück", "Voltar", "Natrag");
  b("Video non trovato.", "Video nicht gefunden.", "Vídeo não encontrado.", "Videozapis nije pronađen.");
  b("Preferito", "Favorit", "Favorito", "Favorit");
  b("Già da rivedere", "Schon zum Wiederholen markiert", "Já para rever", "Već označeno za ponavljanje");
  b("Non riesco a caricare il video. Controlla la connessione e riprova.", "Das Video kann nicht geladen werden. Prüfe die Verbindung und versuch es noch einmal.", "Não consegui carregar o vídeo. Verifica a ligação e tenta novamente.", "Ne mogu učitati videozapis. Provjeri vezu i pokušaj ponovno.");
  b("Note dell’allenatore", "Notizen des Trainers", "Notas do treinador", "Trenerove bilješke");
  b("Nessuna nota per questo video.", "Keine Notizen zu diesem Video.", "Sem notas para este vídeo.", "Nema bilješki za ovaj videozapis.");
  b("Navigazione", "Navigation", "Navegação", "Navigacija");
  b("Non sono riuscito a salvare", "Speichern war nicht möglich", "Não consegui guardar", "Nisam uspio spremiti");
  b("Controlla la connessione e riprova.", "Prüfe die Verbindung und versuch es noch einmal.", "Verifica a ligação e tenta novamente.", "Provjeri vezu i pokušaj ponovno.");
  b("Nuovo video dal tuo allenatore", "Neues Video von deinem Trainer", "Novo vídeo do teu treinador", "Novi videozapis od tvog trenera");
  b("Non riesco a leggere i video", "Die Videos können nicht gelesen werden", "Não consigo ler os vídeos", "Ne mogu učitati videozapise");
  b("Riprova tra poco.", "Versuch es gleich noch einmal.", "Tenta novamente daqui a pouco.", "Pokušaj ponovno za malo.");
  b("Scrivi la tua email, poi tocca di nuovo “Password dimenticata?”.", "Gib deine E-Mail ein und tippe dann noch einmal auf „Passwort vergessen?“.", "Escreve o teu email e toca outra vez em «Esqueceste-te da palavra-passe?».", "Upiši svoju e-poštu, a zatim ponovno dodirni „Zaboravio si lozinku?“.");
  b("Ti ho mandato un’email per scegliere una nuova password.", "Ich habe dir eine E-Mail geschickt, um ein neues Passwort zu wählen.", "Enviei-te um email para escolheres uma nova palavra-passe.", "Poslao sam ti e-poruku za odabir nove lozinke.");
  b("Non riesco a mandare l’email. Controlla l’indirizzo.", "Die E-Mail kann nicht gesendet werden. Prüfe die Adresse.", "Não consigo enviar o email. Verifica o endereço.", "Ne mogu poslati e-poruku. Provjeri adresu.");
  b("← Home", "← Start", "← Início", "← Početna");
  b("Area giocatori", "Spielerbereich", "Área do jogador", "Područje za igrače");
  b("Area allenatori", "Trainerbereich", "Área do treinador", "Područje za trenere");
  b("I video del tuo allenatore, sempre con te sul telefono. Nessuna app da cercare negli store.", "Die Videos deines Trainers, immer auf deinem Handy dabei. Keine App im Store zu suchen.", "Os vídeos do teu treinador, sempre contigo no telemóvel. Sem apps para procurar nas lojas.", "Videozapisi tvog trenera, uvijek uz tebe na mobitelu. Nema potrebe za traženjem aplikacije u trgovinama.");
  b("Come si usa", "So funktioniert es", "Como se usa", "Kako se koristi");
  b("Apri il link qui sotto e accedi con email e password che ti ha dato il tuo allenatore.", "Öffne den Link unten und melde dich mit der E-Mail und dem Passwort an, die dein Trainer dir gegeben hat.", "Abre a ligação abaixo e entra com o email e a palavra-passe que o teu treinador te deu.", "Otvori poveznicu u nastavku i prijavi se e-poštom i lozinkom koje ti je dao trener.");
  b("Al primo accesso cambia la password (pulsante «Cambia password»).", "Ändere beim ersten Anmelden das Passwort (Schaltfläche „Passwort ändern“).", "No primeiro acesso, altera a palavra-passe (botão «Alterar palavra-passe»).", "Pri prvoj prijavi promijeni lozinku (gumb „Promijeni lozinku“).");
  b("Premi «Attiva notifiche»: ti avviseremo quando arriva un nuovo video.", "Tippe auf „Benachrichtigungen aktivieren“: Wir sagen dir Bescheid, wenn ein neues Video ankommt.", "Toca em «Ativar notificações»: avisamos-te quando chegar um novo vídeo.", "Dodirni „Uključi obavijesti“: javit ćemo ti kad stigne novi videozapis.");
  b("Guarda il video e premi «Segna come visto».", "Sieh dir das Video an und tippe auf „Als gesehen markieren“.", "Vê o vídeo e toca em «Marcar como visto».", "Pogledaj videozapis i dodirni „Označi kao pogledano“.");
  b("Installala sul telefono", "Auf dem Handy installieren", "Instala no telemóvel", "Instaliraj na mobitel");
  b("iPhone", "iPhone", "iPhone", "iPhone");
  b("Android", "Android", "Android", "Android");
  b("Apri il link con", "Öffne den Link mit", "Abre a ligação com o", "Otvori poveznicu u pregledniku");
  b("Tocca il tasto Condividi", "Tippe auf die Teilen-Taste", "Toca no botão Partilhar", "Dodirni gumb Podijeli");
  b("Scegli «Aggiungi alla schermata Home»", "Wähle „Zum Home-Bildschirm“", "Escolhe «Adicionar ao ecrã principal»", "Odaberi „Dodaj na početni zaslon“");
  b("Apri l’icona REVOS dalla Home", "Öffne das REVOS-Symbol auf dem Home-Bildschirm", "Abre o ícone REVOS no ecrã principal", "Otvori ikonu REVOS na početnom zaslonu");
  b("Tocca i tre puntini in alto", "Tippe oben auf die drei Punkte", "Toca nos três pontos no topo", "Dodirni tri točkice pri vrhu");
  b("Scegli «Installa app»", "Wähle „App installieren“", "Escolhe «Instalar aplicação»", "Odaberi „Instaliraj aplikaciju“");
  b("Su iPhone le notifiche funzionano solo dopo aver aggiunto l’app alla Home (iOS 16.4 o successivo).", "Auf dem iPhone funktionieren Benachrichtigungen erst, nachdem die App zum Home-Bildschirm hinzugefügt wurde (iOS 16.4 oder neuer).", "No iPhone, as notificações só funcionam depois de adicionares a aplicação ao ecrã principal (iOS 16.4 ou posterior).", "Na iPhoneu obavijesti rade tek nakon što aplikaciju dodaš na početni zaslon (iOS 16.4 ili noviji).");
  b("Privacy", "Datenschutz", "Privacidade", "Privatnost");
  b("Vedi solo i video che il tuo allenatore ha scelto per te.", "Du siehst nur die Videos, die dein Trainer für dich ausgewählt hat.", "Só vês os vídeos que o teu treinador escolheu para ti.", "Vidiš samo videozapise koje je trener odabrao za tebe.");
  b("L’allenatore vede se hai guardato il video e quando.", "Der Trainer sieht, ob und wann du das Video angesehen hast.", "O treinador vê se viste o vídeo e quando.", "Trener vidi jesi li pogledao videozapis i kada.");
  b("Non vengono raccolti altri dati oltre a nome, email e numero di maglia.", "Es werden keine weiteren Daten erhoben außer Name, E-Mail und Trikotnummer.", "Não são recolhidos outros dados além do nome, email e número da camisola.", "Ne prikupljaju se drugi podaci osim imena, e-pošte i broja dresa.");
  b("Apri l’app giocatore", "Spieler-App öffnen", "Abrir a aplicação do jogador", "Otvori aplikaciju za igrače");
  b("Sei un allenatore? Vai all’Area allenatori", "Du bist Trainer? Zum Trainerbereich", "És treinador? Vai para a Área do treinador", "Jesi li trener? Idi na područje za trenere");
  b("Invia video e clip alla squadra, a gruppi o ai singoli, e sai chi li ha guardati.", "Sende Videos und Clips an das Team, an Gruppen oder einzelne Spieler und sieh, wer sie angesehen hat.", "Envia vídeos e clipes à equipa, a grupos ou a jogadores individuais e vê quem os viu.", "Šalji videozapise i isječke momčadi, grupama ili pojedinim igračima i vidi tko ih je pogledao.");
  b("Come funziona", "So funktioniert es", "Como funciona", "Kako funkcionira");
  b("Accedi al pannello con il tuo account e crea la squadra.", "Melde dich mit deinem Konto im Panel an und erstelle dein Team.", "Entra no painel com a tua conta e cria a tua equipa.", "Prijavi se svojim računom na ploču i stvori svoju momčad.");
  b("Aggiungi i giocatori: l’account viene creato in automatico, tu dai loro email e password.", "Füge deine Spieler hinzu: Das Konto wird automatisch erstellt, du gibst ihnen E-Mail und Passwort.", "Adiciona os teus jogadores: a conta é criada automaticamente e tu dás-lhes o email e a palavra-passe.", "Dodaj svoje igrače: račun se stvara automatski, a ti im daješ e-poštu i lozinku.");
  b("Carica un video dal pannello, oppure invialo direttamente da REVOS Sports Analyst con «Invia ai giocatori».", "Lade ein Video im Panel hoch oder sende es direkt aus REVOS Sports Analyst mit „An Spieler senden“.", "Carrega um vídeo no painel ou envia-o diretamente do REVOS Sports Analyst com «Enviar aos jogadores».", "Učitaj videozapis na ploči ili ga pošalji izravno iz aplikacije REVOS Sports Analyst opcijom „Pošalji igračima“.");
  b("Scegli a chi mandarlo e aggiungi una nota. Il giocatore riceve una notifica.", "Wähle aus, an wen es geht, und füge eine Notiz hinzu. Der Spieler erhält eine Benachrichtigung.", "Escolhe a quem o enviar e adiciona uma nota. O jogador recebe uma notificação.", "Odaberi kome ga šalješ i dodaj bilješku. Igrač dobiva obavijest.");
  b("Controlla chi ha visto il video e quando.", "Sieh nach, wer das Video wann angesehen hat.", "Verifica quem viu o vídeo e quando.", "Provjeri tko je pogledao videozapis i kada.");
  b("Crea gruppi (portieri, ali, difensori…) e invia un video a tutto il gruppo con un solo tocco.", "Erstelle Gruppen (Torhüter, Außen, Abwehrspieler…) und sende ein Video mit einem Fingertipp an die ganze Gruppe.", "Cria grupos (guarda-redes, extremos, defesas…) e envia um vídeo a todo o grupo com um só toque.", "Stvori grupe (vratari, krila, obrambeni igrači…) i pošalji videozapis cijeloj grupi jednim dodirom.");
  b("Da REVOS Sports Analyst", "Aus REVOS Sports Analyst", "A partir do REVOS Sports Analyst", "Iz aplikacije REVOS Sports Analyst");
  b("Dopo aver esportato una clip, premi «Invia ai giocatori»: scegli giocatori o gruppi e il video parte.", "Tippe nach dem Export eines Clips auf „An Spieler senden“: Wähle Spieler oder Gruppen aus, und das Video wird verschickt.", "Depois de exportares um clipe, toca em «Enviar aos jogadores»: escolhe jogadores ou grupos e o vídeo é enviado.", "Nakon izvoza isječka dodirni „Pošalji igračima“: odaberi igrače ili grupe i videozapis se šalje.");
  b("Un solo account", "Ein einziges Konto", "Uma só conta", "Jedan račun");
  b("Usa la stessa email e password (o lo stesso accesso Google) in tutti e due: pannello allenatore e REVOS Sports Analyst. Se in Analyst entri con un altro account, non trova la tua squadra e non puoi inviare video.", "Verwende in beiden dieselbe E-Mail und dasselbe Passwort (oder dieselbe Google-Anmeldung): im Trainer-Panel und in REVOS Sports Analyst. Wenn du dich in Analyst mit einem anderen Konto anmeldest, findet es dein Team nicht und du kannst keine Videos senden.", "Usa o mesmo email e palavra-passe (ou o mesmo acesso Google) nos dois: no painel do treinador e no REVOS Sports Analyst. Se entrares no Analyst com outra conta, não encontra a tua equipa e não podes enviar vídeos.", "Koristi istu e-poštu i lozinku (ili istu Google prijavu) u oba: na ploči za trenere i u aplikaciji REVOS Sports Analyst. Ako se u Analyst prijaviš drugim računom, neće pronaći tvoju momčad i nećeš moći slati videozapise.");
  b("Per i giocatori: mandagli il link della pagina Area giocatori, spiega come installare l’app e come accedere.", "Für deine Spieler: Schick ihnen den Link zur Seite „Spielerbereich“ und erkläre, wie man die App installiert und sich anmeldet.", "Para os teus jogadores: envia-lhes a ligação da página Área do jogador e explica como instalar a aplicação e entrar.", "Za tvoje igrače: pošalji im poveznicu na stranicu Područje za igrače i objasni kako se aplikacija instalira i kako se prijavljuje.");
  b("Apri il pannello allenatore", "Trainer-Panel öffnen", "Abrir o painel do treinador", "Otvori ploču za trenere");
  b("Sei un giocatore? Vai all’Area giocatori", "Du bist Spieler? Zum Spielerbereich", "És jogador? Vai para a Área do jogador", "Jesi li igrač? Idi na područje za igrače");
  b("Elimino…", "Wird gelöscht…", "A eliminar…", "Brisanje…");
  b("Giocatore eliminato.", "Spieler gelöscht.", "Jogador eliminado.", "Igrač je izbrisan.");
  b("Non riesco a eliminare il giocatore. Riprova.", "Der Spieler kann nicht gelöscht werden. Versuch es noch einmal.", "Não consigo eliminar o jogador. Tenta novamente.", "Ne mogu izbrisati igrača. Pokušaj ponovno.");

  /* voci nuove (Player: scadenza/download; Coach: staff) in tutte le lingue */
  a("Scarica video", "Download video", "Descargar vídeo", "Télécharger la vidéo", "Video herunterladen", "Descarregar vídeo", "Preuzmi videozapis");
  a("Scarico…", "Downloading…", "Descargando…", "Téléchargement…", "Wird heruntergeladen…", "A descarregar…", "Preuzimanje…");
  a("Download", "Download", "Descarga", "Téléchargement", "Download", "Transferência", "Preuzimanje");
  a("Se non parte, tieni premuto sul video e scegli Salva.", "If it doesn’t start, press and hold the video and choose Save.", "Si no empieza, mantén pulsado el vídeo y elige Guardar.", "S’il ne démarre pas, maintenez le doigt sur la vidéo et choisissez Enregistrer.", "Falls es nicht startet, halte das Video gedrückt und wähle „Speichern“.", "Se não começar, mantém premido o vídeo e escolhe Guardar.", "Ako ne krene, dugo pritisni videozapis i odaberi Spremi.");
  a("Scade oggi", "Expires today", "Caduca hoy", "Expire aujourd’hui", "Läuft heute ab", "Expira hoje", "Istječe danas");
  a("Scade domani", "Expires tomorrow", "Caduca mañana", "Expire demain", "Läuft morgen ab", "Expira amanhã", "Istječe sutra");
  a("Nuovo giocatore o staff", "New player or staff member", "Nuevo jugador o miembro del staff", "Nouveau joueur ou membre du staff", "Neuer Spieler oder Staff-Mitglied", "Novo jogador ou membro do staff", "Novi igrač ili član stožera");
  a("Tipo", "Type", "Tipo", "Type", "Typ", "Tipo", "Vrsta");
  a("Giocatore", "Player", "Jugador", "Joueur", "Spieler", "Jogador", "Igrač");
  a("Staff (allenatore, preparatore, analista…)", "Staff (coach, trainer, analyst…)", "Staff (entrenador, preparador, analista…)", "Staff (entraîneur, préparateur, analyste…)", "Staff (Trainer, Fitnesscoach, Analyst…)", "Staff (treinador, preparador, analista…)", "Stožer (trener, kondicijski trener, analitičar…)");
  a("Ruolo", "Role", "Función", "Rôle", "Rolle", "Função", "Uloga");
  a("Vice allenatore", "Assistant coach", "Entrenador ayudante", "Entraîneur adjoint", "Co-Trainer", "Treinador adjunto", "Pomoćni trener");
  a("Giocatori e staff", "Players and staff", "Jugadores y staff", "Joueurs et staff", "Spieler und Staff", "Jogadores e staff", "Igrači i stožer");
  a("Crea staff", "Create staff member", "Crear miembro del staff", "Créer un membre du staff", "Staff-Mitglied erstellen", "Criar membro do staff", "Stvori člana stožera");
  a("Staff", "Staff", "Staff", "Staff", "Staff", "Staff", "Stožer");

  /* ---------- frasi con numeri / testi variabili ---------- */
  var P = [];
  function p(re, fn) { P.push([re, fn]); }
  function pick(L, arr) { return arr[L] !== undefined ? arr[L] : arr[0]; }
  p(/^(\d+) giocatore$/, function (m, L) { return pick(L, [m[1] + ' player', m[1] + ' jugador', m[1] + ' joueur']); });
  p(/^(\d+) giocatori$/, function (m, L) { return pick(L, [m[1] + ' players', m[1] + ' jugadores', m[1] + ' joueurs']); });
  p(/^Assegnato a (\d+)$/, function (m, L) { return pick(L, ['Assigned to ' + m[1], 'Asignado a ' + m[1], 'Assigné à ' + m[1]]); });
  p(/^(\d+) di (\d+) visti · ultima visione: (.*)$/, function (m, L, tx) { return pick(L, [m[1] + ' of ' + m[2] + ' seen · last view: ', m[1] + ' de ' + m[2] + ' vistos · última visión: ', m[1] + ' sur ' + m[2] + ' vues · dernière vue : ']) + tx(m[3], L); });
  p(/^Tutti (\d+)$/, function (m, L) { return pick(L, ['All ', 'Todos ', 'Toutes ']) + m[1]; });
  p(/^Da vedere (\d+)$/, function (m, L) { return pick(L, ['To watch ', 'Por ver ', 'À voir ']) + m[1]; });
  p(/^Visti (\d+)$/, function (m, L) { return pick(L, ['Seen ', 'Vistos ', 'Vues ']) + m[1]; });
  p(/^(\d+) video da vedere$/, function (m, L) { return pick(L, [m[1] + ' videos to watch', m[1] + ' vídeos por ver', m[1] + ' vidéos à regarder']); });
  p(/^Ciao (.*)$/, function (m, L) { return pick(L, ['Hi ', 'Hola ', 'Salut ']) + m[1]; });
  p(/^(.*?)\s*· Numero (\d+)$/, function (m, L) { var n = pick(L, ['Number ', 'Número ', 'Numéro ']) + m[2]; return (m[1] ? m[1] + ' · ' : '· ') + n; });
  p(/^Giocatore creato\. Comunicagli email e password: (.*)$/, function (m, L) { return pick(L, ['Player created. Give them the email and password: ', 'Jugador creado. Comunícale el correo y la contraseña: ', 'Joueur créé. Communiquez-lui l’e-mail et le mot de passe : ']) + m[1]; });
  p(/^Assegnati (\d+) video(?: \((\d+) già assegnati: nota aggiornata\))?\.$/, function (m, L) {
    var n = m[1], u = m[2];
    var base = pick(L, ['Assigned ' + n + (n === '1' ? ' video' : ' videos'), 'Asignados ' + n + (n === '1' ? ' vídeo' : ' vídeos'), n + (n === '1' ? ' vidéo assignée' : ' vidéos assignées')]);
    var ext = u ? pick(L, [' (' + u + ' already assigned: note updated)', ' (' + u + ' ya asignados: nota actualizada)', ' (' + u + ' déjà assignées : note mise à jour)']) : '';
    return base + ext + '.';
  });
  p(/^Qualcosa non è andato a buon fine(?: \((.*)\))?\.$/, function (m, L) { var c = m[1] ? ' (' + m[1] + ')' : ''; return pick(L, ['Something went wrong' + c + '.', 'Algo no ha ido bien' + c + '.', 'Une erreur est survenue' + c + '.']); });
  p(/^Non riesco a leggere (.*)\. Controlla le regole di sicurezza\.$/, function (m, L) { return pick(L, ['I can’t read ' + m[1] + '. Check the security rules.', 'No puedo leer ' + m[1] + '. Comprueba las reglas de seguridad.', 'Impossible de lire ' + m[1] + '. Vérifiez les règles de sécurité.']); });
  p(/^Non riesco ad attivarle: (.*)$/, function (m, L, tx) { return pick(L, ['I can’t turn them on: ', 'No puedo activarlas: ', 'Impossible de les activer : ']) + tx(m[1], L); });

  p(/^Scade tra (\d+) giorni$/, function (m, L) { return pick(L, ['Expires in ' + m[1] + ' days', 'Caduca en ' + m[1] + ' días', 'Expire dans ' + m[1] + ' jours', 'Läuft in ' + m[1] + ' Tagen ab', 'Expira em ' + m[1] + ' dias', 'Istječe za ' + m[1] + ' dana']); });
  p(/^I video restano disponibili (\d+) giorni dall’invio, poi vengono eliminati automaticamente\.$/, function (m, L) { var n = m[1]; return pick(L, ['Videos stay available for ' + n + ' days after being sent, then they are deleted automatically.', 'Los vídeos están disponibles ' + n + ' días desde el envío; después se eliminan automáticamente.', 'Les vidéos restent disponibles ' + n + ' jours après l’envoi, puis sont supprimées automatiquement.', 'Videos bleiben ' + n + ' Tage nach dem Senden verfügbar und werden danach automatisch gelöscht.', 'Os vídeos ficam disponíveis ' + n + ' dias após o envio e depois são eliminados automaticamente.', 'Videozapisi su dostupni ' + n + ' dana od slanja, a zatim se automatski brišu.']); });
  p(/^Membro dello staff creato\. Comunicagli email e password: (.*)$/, function (m, L) { return pick(L, ['Staff member created. Give them the email and password: ', 'Miembro del staff creado. Comunícale el correo y la contraseña: ', 'Membre du staff créé. Communiquez-lui l’e-mail et le mot de passe : ', 'Staff-Mitglied erstellt. Gib ihm E-Mail und Passwort: ', 'Membro do staff criado. Comunica-lhe o email e a palavra-passe: ', 'Član stožera je stvoren. Priopći mu e-poštu i lozinku: ']) + m[1]; });

  /* tedesco / portoghese / croato per le frasi con numeri (indice L: 3 = de, 4 = pt, 5 = hr) */
  var PX = [];
  function x(re, de, pt, hr) { PX.push([re, [de, pt, hr]]); }
  function f(tpl) { return function (m, t, L) { return tpl.replace(/\{(t?)(\d)\}/g, function (_, tt, i) { return tt ? t(m[i] || '', L) : (m[i] || ''); }); }; }
  x(/^(\d+) giocatore$/, f('{1} Spieler'), f('{1} jogador'), f('{1} igrač'));
  x(/^(\d+) giocatori$/, f('{1} Spieler'), f('{1} jogadores'), f('{1} igrača'));
  x(/^Assegnato a (\d+)$/, f('Zugewiesen an {1}'), f('Atribuído a {1}'), f('Dodijeljeno: {1}'));
  x(/^(\d+) di (\d+) visti · ultima visione: (.*)$/, f('{1} von {2} gesehen · zuletzt angesehen: {t3}'), f('{1} de {2} vistos · última visualização: {t3}'), f('{1} od {2} pogledano · zadnji pregled: {t3}'));
  x(/^Tutti (\d+)$/, f('Alle {1}'), f('Todos {1}'), f('Svi {1}'));
  x(/^Da vedere (\d+)$/, f('Zum Ansehen {1}'), f('Por ver {1}'), f('Za pogledati {1}'));
  x(/^Visti (\d+)$/, f('Gesehen {1}'), f('Vistos {1}'), f('Pogledano {1}'));
  x(/^(\d+) video da vedere$/, f('{1} Videos zum Ansehen'), f('{1} vídeos por ver'), f('{1} videozapisa za pogledati'));
  x(/^Ciao (.*)$/, f('Hallo {1}'), f('Olá {1}'), f('Bok {1}'));
  x(/^(.*?)\s*· Numero (\d+)$/, function (m) { return (m[1] ? m[1] + ' · ' : '· ') + 'Nummer ' + m[2]; }, function (m) { return (m[1] ? m[1] + ' · ' : '· ') + 'Número ' + m[2]; }, function (m) { return (m[1] ? m[1] + ' · ' : '· ') + 'Broj ' + m[2]; });
  x(/^Giocatore creato\. Comunicagli email e password: (.*)$/, f('Spieler erstellt. Gib ihm E-Mail und Passwort: {1}'), f('Jogador criado. Comunica-lhe o email e a palavra-passe: {1}'), f('Igrač je stvoren. Priopći mu e-poštu i lozinku: {1}'));
  x(/^Assegnati (\d+) video(?: \((\d+) già assegnati: nota aggiornata\))?\.$/,
    function (m) { return m[1] + (m[1] === '1' ? ' Video zugewiesen' : ' Videos zugewiesen') + (m[2] ? ' (' + m[2] + ' bereits zugewiesen: Notiz aktualisiert)' : '') + '.'; },
    function (m) { return m[1] + (m[1] === '1' ? ' vídeo atribuído' : ' vídeos atribuídos') + (m[2] ? ' (' + m[2] + ' já atribuídos: nota atualizada)' : '') + '.'; },
    function (m) { return 'Dodijeljeno videozapisa: ' + m[1] + (m[2] ? ' (' + m[2] + ' već dodijeljeno: bilješka ažurirana)' : '') + '.'; });
  x(/^Qualcosa non è andato a buon fine(?: \((.*)\))?\.$/, function (m) { return 'Etwas ist schiefgelaufen' + (m[1] ? ' (' + m[1] + ')' : '') + '.'; }, function (m) { return 'Algo correu mal' + (m[1] ? ' (' + m[1] + ')' : '') + '.'; }, function (m) { return 'Nešto je pošlo po zlu' + (m[1] ? ' (' + m[1] + ')' : '') + '.'; });
  x(/^Non riesco a leggere (.*)\. Controlla le regole di sicurezza\.$/, f('Ich kann {1} nicht lesen. Prüfe die Sicherheitsregeln.'), f('Não consigo ler {1}. Verifica as regras de segurança.'), f('Ne mogu pročitati {1}. Provjeri sigurnosna pravila.'));
  x(/^Non riesco ad attivarle: (.*)$/, f('Ich kann sie nicht aktivieren: {t1}'), f('Não consigo ativá-las: {t1}'), f('Ne mogu ih uključiti: {t1}'));

  /* ---------- motore ---------- */
  function tx(s, L) {
    var k = s.replace(/\s+/g, ' ').trim();
    if (!k) return s;
    var e = D[k];
    if (e) return e[L - 1] || e[0];
    if (L >= 4) { for (var j = 0; j < PX.length; j++) { var mx = k.match(PX[j][0]); if (mx) return PX[j][1][L - 4](mx, tx, L); } }
    for (var i = 0; i < P.length; i++) { var m = k.match(P[i][0]); if (m) return P[i][1](m, L - 1, function (x, l) { return tx(x, l + 1); }); }
    return s;
  }
  var lang = 'it';
  try { lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('revos-lang') || ''; } catch (e) {}
  if (LANGS.indexOf(lang) < 0) { var nl = (navigator.language || 'it').slice(0, 2).toLowerCase(); lang = LANGS.indexOf(nl) >= 0 ? nl : 'it'; }
  var L = LANGS.indexOf(lang);
  document.documentElement.lang = lang;

  /* nota: i modelli sopra usano L 0-based (en=0); tx lavora con L 1-based */
  function trText(n) {
    var v = n.nodeValue;
    if (!v || !v.trim()) return;
    var lead = v.match(/^\s*/)[0], trail = v.match(/\s*$/)[0], core = v.trim();
    var r = tx(core, L);
    if (r !== core) n.nodeValue = lead + r + trail;
  }
  var ATTR = ['placeholder', 'title', 'aria-label', 'alt'];
  function trAttrs(el) {
    for (var i = 0; i < ATTR.length; i++) {
      var v = el.getAttribute && el.getAttribute(ATTR[i]);
      if (v) { var r = tx(v, L); if (r !== v) el.setAttribute(ATTR[i], r); }
    }
  }
  function walk(node) {
    if (node.nodeType === 3) { trText(node); return; }
    if (node.nodeType !== 1 || /^(SCRIPT|STYLE|TEXTAREA)$/.test(node.tagName)) return;
    trAttrs(node);
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }
  var CSS = '.rvl{display:inline-flex;gap:2px;align-items:center;font:600 11px/1 system-ui,sans-serif;letter-spacing:.06em}' +
    '.rvl button{all:unset;cursor:pointer;padding:5px 6px;border-radius:6px;opacity:.6;color:inherit}' +
    '.rvl button:hover{opacity:1}.rvl button[aria-pressed="true"]{opacity:1;background:rgba(139,252,3,.18);color:#8bfc03}' +
    '.rvl button:focus-visible{outline:2px solid #22d3ee}';
  var cssDone = false;
  function mountSwitch(el) {
    if (el.getAttribute('data-done')) return;
    el.setAttribute('data-done', '1');
    if (!cssDone) { var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st); cssDone = true; }
    el.className = 'rvl';
    el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'Language');
    LANGS.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = l.toUpperCase(); b.setAttribute('aria-pressed', l === lang ? 'true' : 'false');
      b.addEventListener('click', function () { try { localStorage.setItem('revos-lang', l); } catch (e) {} var u = new URL(location.href); u.searchParams.delete('lang'); location.href = u.toString(); });
      el.appendChild(b);
    });
  }
  function mounts(root) {
    if (root.nodeType !== 1) return;
    if (root.id === 'rvlang') mountSwitch(root);
    var q = root.querySelectorAll ? root.querySelectorAll('#rvlang') : [];
    for (var i = 0; i < q.length; i++) mountSwitch(q[i]);
  }
  function fixTitle() {
    if (lang === 'it') return;
    var t = document.title, i = t.indexOf(' | ');
    var head = i > 0 ? t.slice(0, i) : t, rest = i > 0 ? t.slice(i) : '';
    var r = tx(head, L); if (r !== head) document.title = r + rest;
  }
  function start() {
    fixTitle();
    if (lang !== 'it') walk(document.body);
    mounts(document.body);
    new MutationObserver(function (muts) {
      muts.forEach(function (mu) {
        if (mu.type === 'characterData') { if (lang !== 'it') trText(mu.target); return; }
        if (mu.type === 'attributes') { if (lang !== 'it') trAttrs(mu.target); return; }
        for (var i = 0; i < mu.addedNodes.length; i++) { var n = mu.addedNodes[i]; if (lang !== 'it') walk(n); mounts(n); }
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();

/* schermo intero (Mac/F11): la barra del browser copre la cima della pagina → spazio extra in alto */
(function () {
  var st = document.createElement('style');
  st.textContent = 'html.rvfs body:not(.rvnofs){padding-top:112px!important}';
  (document.head || document.documentElement).appendChild(st);
  function chk() {
    var fs = window.innerHeight >= screen.height - 2 && window.innerWidth >= screen.width - 2;
    document.documentElement.classList.toggle('rvfs', fs && !document.querySelector('.app'));
  }
  chk(); window.addEventListener('resize', chk);
})();
