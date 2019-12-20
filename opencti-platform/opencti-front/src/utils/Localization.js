const i18n = {
  messages: {
    fr: {
      // Titles
      'OpenCTI - Cyber threat intelligence platform':
        "OpenCTI - Plateforme d'analyse de la cybermenace",
      // Errors
      'Wrong name or password': "Nom d'utilisateur ou mot de passe incorrect",
      'An unknown error has occurred!  Please try again later.':
        'Une erreur est survenue ! Merci de rééssayer plus tard.',
      'You must be logged in to do this.':
        'Vous devez être authentifié pour faire cette action.',
      'You are not allowed to do this.':
        "Vous n'ête pas autorisés à faire cette action.",
      // Interface
      Search: 'Rechercher',
      'Search for a threat...': 'Rechercher une menace...',
      'Do you want to delete this user?':
        'Souahitez-vous supprimer cet utilisateur ?',
      'Do you want to delete this group?':
        'Souahitez-vous supprimer ce groupe ?',
      'Do you want to delete this threat actor?':
        'Souhaitez-vous supprimer cet acteur ?',
      'Do you want to delete this intrusion set?':
        'Souhaitez-vous supprimer ce mode opératoire ?',
      'Do you want to delete this campaign?':
        'Souhaitez-vous supprimer cette campagne ?',
      'Do you want to delete this incident?':
        'Souhaitez-vous supprimer cet incident ?',
      'Do you want to delete this malware?':
        'Souhaitez-vous supprimer ce code malveillant ?',
      'Do you want to delete this marking definition?':
        'Souhaitez-vous supprimer ce marquage ?',
      'Do you want to delete this kill chain phase?':
        'Souhaitez-vous supprimer cette étape de kill chain ?',
      'Do you want to delete this report?':
        'Souhaitez-vous supprimer ce rapport ?',
      'Do you want to delete this external reference?':
        'Souhaitez-vous supprimer cette référence externe ?',
      'Do you want to delete this region?':
        'Souhaitez-vous supprimer cette région ?',
      'Do you want to delete this country?':
        'Souhaitez-vous supprimer ce pays ?',
      'Do you want to delete this city?':
        'Souhaitez-vous supprimer cette ville ?',
      'Do you want to delete this sector?':
        'Souhaitez-vous supprimer ce secteur ?',
      'Do you want to delete this organization?':
        'Souhaitez-vous supprimer cette organisation ?',
      'Do you want to delete this person?':
        'Souhaitez-vous supprimer cette personne ?',
      'Do you want to delete this relation?':
        'Souhaitez-vous supprimer cette relation ?',
      'Do you want to delete this workspace?':
        'Souhaitez-vous supprimer cet espace de travail ?',
      'Do you want to delete this attack pattern?':
        'Souhaitez-vous supprimer cette TTP ?',
      'Do you want to delete this course of action?':
        'Souhaitez-vous supprimer cette conduite à suivre ?',
      'Do you want to delete this tool?':
        'Souhaitez-vous supprimer cet outil ?',
      'Do you want to delete this vulnerability?':
        'Souhaitez-vous supprimer cette vulnérabilité ?',
      'Do you want to delete this indicator?':
        'Souhaitez-vous supprimer cet indicateur ?',
      'Do you want to delete this observable?':
        'Souhaitez-vous supprimer cet observable ?',
      'Do you want to remove the entity from this report?':
        'Souhaitez-vous retirer cette entité de ce rapport ?',
      'Do you want to delete this attribute?':
        'Souhaitez-vous supprimer cet attribut ?',
      'Do you want to remove this external reference?':
        'Souhaitez-vous supprimer cette référence externe ?',
      'Do you want to remove the observable from this indicator?':
        'Souhaitez-vous supprimer cet observable de cet indicateur ?',
      'Confirmation required': 'Confirmation requise',
      Information: 'Informations',
      'Last reports': 'Derniers rapports',
      'Last reports wrote by the entity':
        'Derniers rapports écrits par cette entité',
      'Last reports about the entity': "Derniers rapports à propos de l'entité",
      'Last observables': 'Derniers observables',
      'observable(s)': 'observable(s)',
      'Last modified entities': 'Dernières entités modifiées',
      'Global parameters': 'Paramètres généraux',
      'External authentication': 'Authentification externe',
      Title: 'Titre',
      'Sender email address': "Adresse mail d'expédition",
      'Base URL': 'URL de base',
      Language: 'Langue',
      Automatic: 'Automatique',
      Roles: 'Rôles',
      Subsectors: 'Sous-secteurs',
      Registration: 'Inscription',
      'are updating...': 'modifient actuellement...',
      'is updating...': 'modifie actuellement...',
      // Form
      Yes: 'Oui',
      No: 'Non',
      'Just in the report': 'Juste dans le rapport',
      'In all the database': 'Dans toute la base',
      Create: 'Créer',
      Update: 'Modifier',
      Export: 'Exporter',
      Delete: 'Supprimer',
      Remove: 'Supprimer',
      Cancel: 'Annuler',
      Import: 'Importer',
      'Import data': 'Importer des données',
      'Import successfully asked': "L'import a été demandé",
      'Import type': "Type d'import",
      'STIX2 bundle': 'Bundle STIX2',
      'File to import': 'Fichier à importer',
      'Select your file': 'Selectionner votre fichier',
      'The importation of the file has been started':
        "L'importation du fichier a été lancée",
      Add: 'Ajouter',
      'Turn to user': 'Transformer en utilisateur',
      'This person is now a user':
        'Cette personne est maintenant un utilisateur',
      'This field is required': 'Ce champ est requis',
      'This field must only contain alphanumeric chars, dashes and space':
        'Ce champ ne peut contenir que des caractères alphanumériques, des tirets et des espaces',
      'The value is too short': 'La valeur est trop courte',
      'The value is too long': 'La valeur est trop longue',
      'The value must be a number': 'La valeur doit être un nombre',
      'The value must be an email address':
        'La valeur doit être une adresse email',
      'The value must be an URL': 'La valeur doit être une URL',
      'The value must be a date (YYYY-MM-DD)':
        'La valeur doit être une date (AAAA-MM-JJ)',
      'The values do not match': 'Les valeurs ne correspondent pas',
      'No available options': 'Aucune option disponible',
      'No description of this usage': 'Aucune description de cet usage',
      'Create a workspace': 'Créer un espace de travail',
      'Update a workspace': 'Modifier un espace de travail',
      'Add a widget': 'Ajouter un widget',
      'Update a widget': 'Modifier un widget',
      'Create a user': 'Créer un utilisateur',
      'Update a user': 'Modifier un utilisateur',
      'Create a group': 'Créer un groupe',
      'Update a group': 'Modifier un groupe',
      'Create an entity': 'Créer une entité',
      'Update an entity': 'Modifier une entité',
      'Create a threat actor': 'Créer un acteur',
      'Update a threat actor': 'Modifier un acteur',
      'Create an intrusion set': 'Créer un mode opératoire',
      'Update an intrusion set': 'Modifier un mode opératoire',
      'Create a campaign': 'Créer une campagne',
      'Update a campaign': 'Modifier une campagne',
      'Create an incident': 'Créer un incident',
      'Update an incident': 'Modifier un incident',
      'Create a malware': 'Créer un code malveillant',
      'Update a malware': 'Modifier un code malveillant',
      'New alias': 'Nouvel alias',
      'Aliases separated by commas': 'Alias séparés par des virgules',
      'Entity aliases': "Alias de l'entité",
      'Create a marking definition': 'Créer un marquage',
      'Update a marking definition': 'Modifier un marquage',
      'Max marking definition level': 'Niveau de marquage maximum',
      'Create a tag': 'Créer un tag',
      'Update a tag': 'Modifier un tag',
      'Create a kill chain phase': 'Créer une étape de kill chain',
      'Update a kill chain phase': 'Modifier une étape de kill chain',
      'Create a report': 'Créer un rapport',
      'Update a report': 'Modifier un rapport',
      'Create a region': 'Créer une région',
      'Update a region': 'Modifier une région',
      'Create a country': 'Créer un pays',
      'Update a country': 'Modifier un pays',
      'Create a sector': 'Créer un secteur',
      'Update a sector': 'Modifier un secteur',
      'Create a city': 'Créer une ville',
      'Update a city': 'Modifier une ville',
      'Create an organization': 'Créer une organisation',
      'Update an organization': 'Modifier une organisation',
      'Create a person': 'Créer une personne',
      'Update a person': 'Modifier une personne',
      'Create an external reference': 'Créer une référence externe',
      'Update an external reference': 'Modifier une référence externe',
      'Create an attack pattern': 'Créer une TTP',
      'Update an attack pattern': 'Modifier une TTP',
      'Create a course of action': 'Créer une conduite à suivre',
      'Update a course of action': 'Modifier une conduite à suivre',
      'Create a tool': 'Créer un outil',
      'Update a tool': 'Modifier un outil',
      'Create a vulnerability': 'Créer une vulnérabilité',
      'Update a vulnerability': 'Modifier une vulnérabilité',
      'Create an observable': 'Créer un observable',
      'Update an observable': 'Modifier un observable',
      'Create an indicator': 'Créer un indicateur',
      'Update an indicator': 'Modifier un indicateur',
      'Create a relationship': 'Créer une relation',
      'Update a relationship': 'Modifier une relation',
      'Select a relationship': 'Sélectionner une relation',
      'Create an attribute': 'Créer un attribut',
      'Update an attribute': 'Modifier un attribut',
      'Add external references': 'Ajouter des références externes',
      'Add courses of action': 'Ajouter des conduites à suivre',
      'Add attack patterns': 'Ajouter des TTPs',
      'Add entities': 'Ajouter des entités',
      'Add observables': 'Ajouter des observables',
      'Add observable': 'Ajouter un observable',
      'The password has been updated': 'Le mot de passe a été modifié',
      'The alias has been added': "L'alias a bien été ajouté",
      'Settings have been updated': 'Les paramètres ont été mis à jour',
      'Export the entity': "Exporter l'entité",
      'Demo credentials': 'Identifiants de démo',
      'No connectors are enabled on this platform.':
        "Aucun connecteur n'est actif sur cette plateforme",
      'Enabled import connectors': "Connecteurs d'import activés",
      'Enrichment connectors': "Connecteurs d'enrichissement",
      'Registered connectors': 'Connecteurs enregistrés',
      'No import connectors on this platform':
        "Aucun connecteur d'import sur cette plateforme",
      'No connectors for this type of observable':
        "Aucun connecteur pour ce type d'observable",
      'This connector is active': 'Ce connecteur est actif',
      'This connector is disconnected': 'Ce connecteur est déconnecté',
      'Reset the connector state': "Réinitialiser l'état du connecteur",
      'The connector state has been reset':
        "L'état du connecteur a été réinitialisé",
      'Refresh the knowledge using this connector':
        'Actualiser la connaissance en utilisant ce connecteur',
      // Menu
      Dashboard: 'Tableau de bord',
      Visualization: 'Visualisation',
      Workspaces: 'Espaces de travail',
      Workspace: 'Espace de travail',
      Knowledge: 'Connaissance',
      Explore: 'Explorer',
      Investigate: 'Investiguer',
      Correlate: 'Corréler',
      Connectors: 'Connecteurs',
      Settings: 'Paramètres',
      About: 'A propos',
      General: 'Général',
      Versions: 'Versions',
      'Tags & Attributes': 'Tags & Attributs',
      Tags: 'Tags',
      Tag: 'Tag',
      Accesses: 'Accès',
      Dependencies: 'Dépendances',
      'OpenCTI version': 'OpenCTI version',
      'No tag': 'Aucun tag',
      'Add new tags': 'Ajouter des tags',
      'Data import': 'Importation de données',
      'Threat actors': 'Acteurs',
      'Threat actor': 'Acteur',
      Sectors: 'Secteurs',
      'Intrusion sets': 'Modes opératoires',
      'Intrusion set': 'Mode opératoire',
      Attribution: 'Attribution',
      Campaigns: 'Campagnes',
      Campaign: 'Campagne',
      Incidents: 'Incidents',
      Incident: 'Incident',
      Malwares: 'Codes malveillants',
      Malware: 'Code malveillant',
      'Courses of action': 'Conduites à suivre',
      'Course of action': 'Conduite à suivre',
      Tools: 'Outils',
      Tool: 'Outil',
      Vulnerabilities: 'Vulnérabilités',
      Vulnerability: 'Vulnérabilité',
      Identities: 'Identités',
      Identity: 'Identité',
      Enrichment: 'Enrichissement',
      'Connectors & workers': 'Connecteurs et workers',
      Reports: 'Rapports',
      Report: 'Report',
      Indicator: 'Indicateur',
      Indicators: 'Indicateurs',
      'Indicators composed with this observable':
        'Indicateurs composés avec cet observable',
      Overview: 'Aperçu',
      Relationships: 'Relations',
      Entities: 'Entités',
      'entitie(s)': 'entité(s)',
      Observables: 'Observables',
      Category: 'Catégorie',
      Constituent: 'Bénéficiaire',
      Enabled: 'Activé',
      CSIRT: 'CSIRT',
      Partner: 'Partenaire',
      Vendor: 'Editeur',
      Other: 'Autre',
      'Organization type': "Type d'organisation",
      'Entities types': "Types d'entités",
      'Attack pattern usage': 'Usage de cette TTP',
      'Vulnerability usage': 'Usage de cette vulnérabilité',
      'Entity usage': 'Usage de cette entité',
      'Distribution:': 'Répartition :',
      Distribution: 'Répartition',
      'Reports distribution': 'Répartition des rapports',
      'Targeting types': 'Types de ciblages',
      'Used TTPs': 'TTPs utilisées',
      Evolution: 'Evolution',
      'Targeting through time': 'Ciblage à travers le temps',
      'TTPs through time': 'TTPs à travers le temps',
      Graph: 'Graph',
      'Targeting knowledge': 'Connaissance du ciblage',
      'TTPs knowledge': 'Connaissance des TTPs',
      Compare: 'Comparer',
      'Threats targeting': 'Ciblages de menaces',
      'TTPs of threats': 'TTPs de menaces',
      'Number of': 'Nombre de',
      Number: 'Nombre',
      'Top 10:': 'Top 10 :',
      Close: 'Fermer',
      Parameters: 'Paramètres',
      Users: 'Utilisateurs',
      Groups: 'Groupes',
      Global: 'Global',
      'Knowledge graph': 'Graph de connaissance',
      Objective: 'Objectif',
      Configuration: 'Configuration',
      Victimology: 'Victimologie',
      'Processing status': 'Etat du traitement',
      'Attack patterns': 'TTPs',
      TTPs: 'TTPs',
      'Mitigated TTPs': 'TTPs atténuées',
      Techniques: 'Techniques',
      'All reports': 'Tous les rapports',
      Tactics: 'Tactiques',
      Countries: 'Pays',
      Regions: 'Régions',
      Cities: 'Villes',
      Organizations: 'Organisations',
      Persons: 'Personnes',
      Threats: 'Menaces',
      Connected: 'Connecté',
      Disconnected: 'Déconnecté',
      'All observables': 'Tous les observables',
      'Autonomous system': 'Système autonome',
      'Domain names': 'Noms de domaine',
      'IPv4 addresses': 'Adresses IPv4',
      'IPv6 addresses': 'Adresses IPv6',
      'Email addresses': 'Adresses email',
      'File hashes': 'Condensats de fichiers',
      'PDB Path': 'Chemin PDB',
      'Attack pattern': 'TTP',
      'Attributed to this actor': 'Attribué à cet acteur',
      'Targeted by this actor': 'Ciblé par cet acteur',
      'Used by this actor': 'Utilisé par cet acteur',
      'Targeting this sector': 'Ciblant ce secteur',
      'Affecting this sector': 'Affectant ce secteur',
      'Part of this sector': 'Appartenant à ce secteur',
      'Origins of this intrusion set': 'Origine de ce mode opératoire',
      'Attributed to this intrusion set': 'Attribué à ce mode opératoire',
      'Used by this intrusion set': 'Utilisé par ce mode opératoire',
      'Targeted by this intrusion set': 'Ciblé par ce mode opératoire',
      'Origins of this campaign': 'Origine de cette campagne',
      'Attributed to this campaign': 'Attribué à cette campagne',
      'Used in this campaign': 'Utilisé dans cette campagne',
      'Targeted in this campaign': 'Ciblé dans cette campagne',
      'Origins of this incident': 'Origine de cet incident',
      'Targeted in this incident': 'Ciblé dans cet incident',
      'Used in this incident': 'Utilisé dans cet incident',
      Usage: 'Utilisation',
      'Threats using this malware': 'Menaces utilisant ce code',
      Variants: 'Variantes',
      'Variants of this malware': 'Variantes de ce code',
      'Targeted by this malware': 'Ciblé par ce code',
      'Used by this malware': 'Utilisé par ce code',
      'This malware has been used': 'Ce code a été utilisé',
      'Using this TTP': 'Utilisant cette TTP',
      'Using this tool': 'Utilisant cet outil',
      'Tool usage': 'Utilisation de cet outil',
      'Targeting this vulnerability': 'Ciblant cette vulnérabilité',
      'Related to this organization': 'Lié à cette organisation',
      'Belonging to this organization': 'Appartenant à cette organisa.',
      'Attributed to this organization': 'Attribué à cette organisation',
      'Targeting this organization': 'Ciblant cette organisation',
      'Locations of this organization': 'Lieux de cette organisation',
      'This person is part of': 'Cette personne fait partie de',
      'Localized in this country': 'Localisé dans ce pays',
      'Locations of this person': 'Lieux de cette personne',
      'Targeting this person': 'Ciblant cette personne',
      'Targeting this country': 'Ciblant ce pays',
      'Attributed to this country': 'Attribué à ce pays',
      'Related to this country': 'Lié à ce pays',
      'Localized in this region': 'Localisé dans cette région',
      'Targeting this region': 'Ciblant cette région',
      'Attributed to this region': 'Attribué à cette région',
      'Related to this region': 'Lié à cette région',
      Inferences: 'Inférences',
      'Inference rules': "Règles d'inférence",
      Inferred: 'Inféré',
      'CSV file': 'Fichier CSV',
      'Export data in CSV': 'Exporter les données en CSV',
      'The CSV file has been generated with the parameters of the view and is ready for download.':
        'Le fichier CSV a été généré avec les paramètres de la vue et est prêt pour être téléchargé.',
      'Generated the': 'Généré le',
      'Never generated': 'Jamais généré',
      'Generation in progress...': 'Génération en cours...',
      'Export format': "Format d'export",
      'Export successfully started': "L'export a démarré avec succès",
      'Export type': "Type d'export",
      'Generate an export': 'Générer un export',
      'No export connector available to generate an export':
        "Aucun connecteur d'export disponible pour générer un export",
      'Simple export (just the entity)': "Export simple (seulement l'entité)",
      'Full export (entity and first neighbours)':
        'Export complet (entité et ses voisins)',
      'Uploaded files': 'Fichiers uploadés',
      'File successfully removed': 'Fichier supprimé avec succès',
      'File successfully uploaded': 'Fichier uploadé avec succès',
      'Launch an import of this file': 'Lancer un import de ce fichier',
      'Download this file': 'Télécharger ce fichier',
      'Delete this file': 'Supprimer ce fichier',
      'No file for the moment': 'Aucun fichier pour le moment',
      Download: 'Télécharger',
      'Exported files': 'Fichiers exportés',
      'Inference explanation': "Explication de l'inférence",
      entity: 'entité',
      entities: 'entités',
      Relation: 'Relation',
      progress: 'En cours',
      // User
      'Sign in': "S'identifier",
      Email: 'Email',
      Password: 'Mot de passe',
      Logout: 'Se déconnecter',
      Profile: 'Profil',
      Admin: 'Admin',
      'All years': 'Toutes les années',
      'All entities': 'Toutes les entités',
      'All confidence levels': 'Tous les niveaux de confiance',
      Month: 'Mois',
      Year: 'Année',
      Role: 'Rôle',
      'Start date': 'Date de début',
      'End date': 'Date de fin',
      // Properties
      Entity: 'Entité',
      Widget: 'Widget',
      Size: 'Taille',
      'Sort by': 'Trier par',
      'Filter by': 'Filtrer par',
      Name: 'Nom',
      Description: 'Description',
      'This sector does not have any description.':
        "Ce secteur n'a aucune description.",
      'Relationship type': 'Type de relation',
      'Creation date': 'Date de création',
      'Modification date': 'Date de modification',
      'Updated the': 'Mis à jour le',
      Creator: 'Créateur',
      Marking: 'Marquage',
      'Kill chain phases': 'Phases de kill chain',
      'Kill chain phase': 'Phase de kill chain',
      Definition: 'Définition',
      Level: 'Niveau',
      Color: 'Couleur',
      'Force now': 'Forcer maintenant',
      Type: 'Type',
      'Email address': 'Adresse email',
      name: "Nom d'utilisateur",
      Firstname: 'Prénom',
      Lastname: 'Nom',
      Permissions: 'Permissions',
      Members: 'Membres',
      'First seen': 'Première observation',
      'Last seen': 'Dernière observation',
      'First obs.': 'Première obs.',
      'Last obs.': 'Dernière obs.',
      Confirmation: 'Confirmation',
      'Kill chain': 'Kill chain',
      'This feature is not available yet.':
        "Cette fonctionnalité n'est pas encore disponible.",
      'Phase name': "Nom de l'étape",
      'Kill chain name': 'Nom de la kill chain',
      Order: 'Ordre',
      Options: 'Options',
      Author: 'Auteur',
      Owner: 'Propriétaire',
      'Publication date': 'Date de publication',
      Publication: 'Publication',
      'Entity type': "Type d'entité",
      'Report type': 'Type de rapport',
      'Report types': 'Types de rapport',
      Organization: 'Organisation',
      Sector: 'Secteur',
      Country: 'Pays',
      Region: 'Région',
      City: 'Ville',
      Locations: 'Localisations',
      Signatures: 'Signatures',
      Person: 'Personne',
      Pattern: 'Motif',
      'Pattern type': 'Type de motif',
      'Indicator pattern': "Motif de l'indicateur",
      'Valid from': 'Valide depuis',
      'Valid until': "Valide jusqu'à",
      Score: 'Score',
      'Search for an entity': 'Rechercher une entité',
      'Linked knowledge': 'Connaissance liée',
      'Linked entities': 'Entités liées',
      'Linked observables': 'Observables liés',
      'Links with threats': 'Liens avec des menaces',
      'External references': 'Références externes',
      References: 'Références',
      'Source name': 'Nom de la source',
      'External ID': 'ID externe',
      Relations: 'Relations',
      relations: 'relations',
      URL: 'URL',
      'Confidence level': 'Niveau de confiance',
      Confidence: 'Confiance',
      'Relation type': 'Type de relation',
      Low: 'Faible',
      Moderate: 'Modéré',
      Good: 'Bon',
      Strong: 'Fort',
      Back: 'Retour',
      Unknown: 'Inconnu',
      Sophistication: 'Sophistication',
      'Resource level': 'Niveau de ressource',
      'Primary motivation': 'Motivation première',
      'Secondary motivation': 'Motivation secondaire',
      Goal: 'Objectif',
      'Observable value': "Valeur de l'observable",
      'Observable type': "Type d'observable",
      'Observable types': "Types d'observable",
      'Indicator type': "Type d'indicateur",
      'Indicator types': "Types d'indicateur",
      'Main observable type': "Type d'observable principal",
      'Played role': 'Rôle joué',
      'Observables roles': 'Rôles des observables',
      Proxy: 'Proxy',
      Sender: 'Expéditeur',
      Implant: 'Implant',
      Domain: 'Nom de domaine',
      'IPv4 address': 'Adresse IPv4',
      'IPv6 address': 'Adresse IPv6',
      Mutex: 'Mutex',
      'Email subject': 'Sujet de mail',
      Files: 'Fichiers',
      Emails: 'Emails',
      'Autonomous systems': 'Systèmes autonomes',
      'Windows services': 'Services Windows',
      'Windows scheduled tasks': 'Tâches planifiées Windows',
      'X509 Certificates': 'Certificats X509',
      Registry: 'Registre Windows',
      'Registry key': 'Clé de registre',
      'Registry key value': 'Valeur de clé de registre',
      'File hash': 'Condensat de fichier',
      'File MD5 hash': 'Condensat MD5 de fichier',
      'File SHA1 hash': 'Condensat SHA1 de fichier',
      'File SHA256 hash': 'Condensat SHA256 de fichier',
      'File name': 'Nom de fichier',
      'File path': 'Chemin de fichier',
      Key: 'Clé',
      Value: 'Valeur',
      'Linked threat(s)': 'Menace(s) liée(s)',
      'Linked threat': 'Menace liée',
      // Statistics
      '[Victimology] Distribution': '[Victimologie] Répartition',
      '[Victimology] Timeseries': '[Victimologie] Séries temporelles',
      '[Campaigns] Timeseries': '[Campagnes] Séries temporelles',
      '[Incidents] Timeseries': '[Incidents] Séries temporelles',
      '[TTPs] Distribution': '[TTPs] Répartition',
      '[Killchain] Tactics and procedures':
        '[Killchain] Tactiques et procédures',
      'No widget in this workspace': 'Aucun widget dans cet espace de travail',
      'Averages of context relations': 'Moyennes des relations de contexte',
      'Synthesis of knowledge': 'Synthèse de la connaissance',
      Statistics: 'Statistiques',
      Metrics: 'Métriques',
      'Queued messages': 'Messages en attente',
      'Connected workers': 'Workers connectés',
      'In progress messages': 'Messages en traitement',
      'Messages processed': 'Messages traités',
      'Last processed message': 'Dernier message traité',
      'Total processed messages': 'Total de messages traités',
      'Graph type': 'Type de graphique',
      'Table (top 10)': 'Tableau (top 10)',
      'Workers statistics': 'Statistiques des workers',
      'Pie chart': 'Camembert',
      'Donut chart': 'Donut',
      'Radar chart': 'Radar',
      Table: 'Tableau',
      'Line chart': 'Graphique linéaire',
      Timeline: 'Chronologie',
      'Total pending inserts': "Nombre d'insertions en attente",
      'Relations to threats': 'Relations vers des menaces',
      'Context relations': 'Relations de contexte',
      'Direct relations creations': 'Créations de relations directes',
      'Number of target relations': 'Nombre de relations de ciblage',
      'Total entities': "Nombre d'entités",
      'Total observables': "Nombre d'observables",
      'Total reports': 'Nombre de rapports',
      'Total workspaces': "Nombre d'espaces de travail",
      'Total relations': 'Nombre de relations',
      'Total direct relations': 'Nombre de relations directes',
      'Distribution of relations (including inferred)':
        'Répartition des relations (inférences incluses)',
      'Ingested entities': 'Entités stockées',
      'last 24h': 'dernières 24h',
      'last month': 'dernier mois',
      'No entities were found for this search.':
        "Aucune entité n'a été trouvée pour cette recherche.",
      'API access': "Accès à l'API",
      Example: 'Exemple',
      'API key': "Clé d'API",
      Playground: 'Playground',
      Details: 'Détails',
      All: 'Tout',
      Clear: 'Effacer',
      'No entities of this type has been found.':
        "Aucune entité de ce type n'a été trouvée.",
      // Explore
      'Kill chains': 'Kill chains',
      'Explore the victims and the targets of the dataset through space and time.':
        "Explorer les victimes et les cibles des données à travers l'espace et le temps",
      'Explore the attack campaigns of the dataset through time and involved entities.':
        "Explorer les campagnes d'attaques des données à travers le temps et les entités impliquées.",
      'Explore the techniques, tactics and procedures of the dataset through time and entities who used its.':
        'Explorer les techniques, tactiques et procédures des données à travers le temps et les entités qui les utilisent.',
      'Explore the kill chains of entities through time and other contextual information like campaigns or incidents.':
        "Explorer les kill chains des entités à travers le temps et d'autres informations contextuelles comme les campagnes ou les incidents.",
      'Explore the vulnerabilities used by entities through time and kill chain phases.':
        'Explorer les vulnérabilités utilisées par les entités à travers le temps et les phases de la kill chain.',
      'Explore the observables of the dataset though time to visualize clusters and correlations.':
        'Explorer les observables des données à travers le temps pour visualiser des clusters et des corrélations.',
      'Origins of the targeting': 'Origines du ciblage',
      'Types of the targeting': 'Types de ciblage',
      'Types of the targets': 'Types de cibles',
      'Targeted entities types': "Types d'entités ciblées",
      'Targeted entities through time': "Ciblages d'entités à travers le temps",
      'Number of targeting': 'Nombre de ciblages',
      'Related entities (generic relation "related-to")':
        'Entités liées (relation générique "lié à")',
      Platforms: "Systèmes d'exploitation",
      Platform: "Système d'exploitation",
      'Required permissions': 'Permissions requises',
      None: 'Aucun',
      Nonee: 'Aucune',
      // Time
      '24h': '24h',
      // Types
      'entity_threat-actor': 'Acteur',
      'entity_attack-pattern': 'TTP',
      'entity_intrusion-set': 'Mode opératoire',
      entity_campaign: 'Campagne',
      entity_incident: 'Incident',
      entity_malware: 'Code malveillant',
      entity_tool: 'Outil',
      entity_organization: 'Organisation',
      entity_sector: 'Secteur',
      entity_region: 'Région',
      entity_country: 'Pays',
      entity_city: 'Ville',
      entity_user: 'Personne',
      entity_report: 'Rapport',
      entity_vulnerability: 'Vulnérabilité',
      entity_indicator: 'Indicateur',
      entity_all: 'Toutes les entités',
      'entity_course-of-action': 'Mesure de mitigation',
      'entity_Kill-Chain-Phase': 'phases de kill chain',
      'entity_Stix-Domain-Entity': "types d'entités",
      entity_Sector: "secteurs d'activité",
      entity_Country: 'pays',
      entity_Region: 'régions',
      entity_Indicator: 'indicateurs',
      'entity_Attack-Pattern': 'TTPs',
      'entity_Stix-Observable': 'observables',
      entity_targets: 'cible',
      entity_uses: 'utilise',
      'entity_attributed-to': 'attribué à',
      'entity_variant-of': 'variante de',
      'entity_part-of': 'fait parti de',
      entity_localization: 'localisé dans/en',
      'entity_related-to': 'lié à',
      entity_gathering: 'appartient à',
      'entity_comes-after': 'vient après',
      entity_indicates: 'indique',
      entity_mitigates: 'atténue',
      entity_drops: 'dépose',
      'entity_stix-relation': 'relation',
      entity_stix_relation: 'relation',
      'observable_autonomous-system': 'Système autonome',
      'observable_ipv4-addr': 'Adresse IPv4',
      'observable_ipv6-addr': 'Adresse IPv6',
      observable_url: 'URL',
      observable_domain: 'Nom de domaine',
      observable_email: 'Adresse email',
      'observable_email-address': 'Adresse email',
      'observable_email-subject': 'Sujet de mail',
      observable_mutex: 'Mutex',
      observable_file: 'Fichier',
      'observable_file-name': 'Nom de fichier',
      'observable_file-path': 'Chemin de fichier',
      'observable_file-md5': 'Fichier (MD5)',
      'observable_file-sha1': 'Fichier (SHA1)',
      'observable_file-sha256': 'Fichier (SHA256)',
      'observable_registry-key': 'Clé de registre',
      'observable_registry-key-value': 'Valeur de clé de registre',
      'observable_pdb-path': 'Chemin PDB',
      Status: 'Statut',
      // Relations
      Targets: 'Cible',
      Uses: 'Utilise',
      'Attributed to': 'Attribué à',
      'Variant of': 'Variante de',
      'Part of': 'Fait parti de',
      'Localized in': 'Localisé dans/en',
      'Related to': 'Lié à',
      relation_targets: 'cible',
      relation_uses: 'utilise',
      'relation_attributed-to': 'attribué à',
      'relation_variant-of': 'variante de',
      'relation_part-of': 'fait parti de',
      relation_localization: 'localisé dans/en',
      'relation_related-to': 'lié à',
      relation_gathering: 'appartient à',
      'relation_comes-after': 'vient après',
      relation_indicates: 'indique',
      relation_mitigates: 'atténue',
      relation_drops: 'dépose',
      relation_linked: 'lié à',
      relation_belongs: 'appartient à',
      relation_corresponds: 'correspond à',
      relation_resolves: 'résoud',
      confidence_0: 'Tous les niveaux de confiance',
      confidence_1: 'Faible',
      confidence_2: 'Modéré',
      confidence_3: 'Bon',
      confidence_4: 'Fort',
      confidence_unknown: 'Inconnue',
      sophistication_none: 'Aucun',
      sophistication_minimal: 'Minimaliste',
      sophistication_intermediate: 'Intermédiaire',
      sophistication_advanced: 'Avancé',
      sophistication_expert: 'Expert',
      sophistication_innovator: 'Innovant',
      sophistication_strategic: 'Stratégique',
      sophistication_unkown: 'Inconnu',
      resource_individual: 'Individuel/Indépendant',
      resource_club: 'Groupe informel',
      resource_contest: 'Mouvement spontané',
      resource_team: 'Equipe organisée',
      resource_organization: 'Organisation structurée',
      resource_government: 'Etatique/Gouvernemental',
      resource_unkown: 'Inconnu',
      motivation_accidental: 'Accidentel/Erreur',
      motivation_coercion: 'Forcé/Contraint',
      motivation_dominance: 'Domination/Pouvoir',
      motivation_ideology: 'Idéologie/Conviction',
      motivation_notoriety: 'Notoriété/Prestige',
      'motivation_organizational-gain': 'Avantage concurrentiel',
      'motivation_personal-gain': 'Gain individuel',
      'motivation_personal-satisfaction': 'Satisfaction personnelle',
      motivation_revenge: 'Vengeance/Revanche',
      motivation_unpredictable: 'Imprédictible/Inconnu',
      motivation_unknown: 'Indéfini',
      report_status_0: 'Nouveau',
      report_status_1: 'En cours',
      report_status_2: 'Capitalisé',
      report_status_3: 'Fermé',
      organization_constituent: 'Bénéficiaire',
      organization_csirt: 'CSIRT',
      organization_partner: 'Partenaire',
      organization_vendor: 'Editeur',
      organization_other: 'Autre',
    },
    en: {
      progress: 'In progress',
      Nonee: 'None',
      // Types
      'entity_threat-actor': 'Threat actor',
      'entity_attack-pattern': 'TTP',
      'entity_intrusion-set': 'Intrusion set',
      entity_campaign: 'Campaign',
      entity_incident: 'Incident',
      entity_malware: 'Malware',
      entity_tool: 'Tool',
      entity_organization: 'Organization',
      entity_sector: 'Sector',
      entity_region: 'Region',
      entity_country: 'Country',
      entity_city: 'City',
      entity_user: 'Person',
      entity_report: 'Report',
      entity_vulnerability: 'Vulnerability',
      entity_indicator: 'Indicator',
      entity_all: 'All entities',
      'entity_course-of-action': 'Course of action',
      'entity_Kill-Chain-Phase': 'kill chain phases',
      'entity_Stix-Domain-Entity': 'entities types',
      entity_Sector: 'activity sectors',
      entity_Country: 'countries',
      entity_Region: 'regions',
      entity_Indicator: 'indicators',
      'entity_Attack-Pattern': 'TTPs',
      'entity_Stix-Observable': 'observables',
      entity_targets: 'targets',
      entity_uses: 'uses',
      'entity_attributed-to': 'attributed to',
      'entity_variant-of': 'variant of',
      'entity_part-of': 'part of',
      entity_localization: 'localized in',
      'entity_related-to': 'related to',
      entity_gathering: 'belong to',
      'entity_comes-after': 'comes after',
      entity_indicates: 'indicates',
      entity_mitigates: 'mitigates',
      entity_drops: 'drops',
      'entity_stix-relation': 'relation',
      entity_stix_relation: 'relation',
      'observable_autonomous-system': 'Autonomous system',
      'observable_ipv4-addr': 'IPv4 address',
      'observable_ipv6-addr': 'IPv6 address',
      observable_url: 'URL',
      observable_domain: 'Domain name',
      observable_email: 'Email address',
      'observable_email-address': 'Email address',
      'observable_email-subject': 'Email subject',
      observable_mutex: 'Mutex',
      observable_file: 'File',
      'observable_file-name': 'File name',
      'observable_file-path': 'File path',
      'observable_file-md5': 'File hash (MD5)',
      'observable_file-sha1': 'File hash (SHA1)',
      'observable_file-sha256': 'File hash (SHA256)',
      'observable_registry-key': 'Registry key',
      'observable_registry-key-value': 'Registry key value',
      'observable_pdb-path': 'PDB Path',
      // Relations
      relation_targets: 'targets',
      relation_uses: 'uses',
      'relation_attributed-to': 'attributed to',
      'relation_variant-of': 'variant of',
      'relation_part-of': 'part of',
      relation_localization: 'localized in',
      'relation_related-to': 'related to',
      relation_gathering: 'belong to',
      'relation_comes-after': 'comes after',
      relation_indicates: 'indicates',
      relation_mitigates: 'mitigates',
      relation_drops: 'drops',
      relation_linked: 'linked',
      relation_belongs: 'belongs to',
      relation_corresponds: 'corresponds to',
      relation_resolves: 'resolves',
      confidence_0: 'All confidence levels',
      confidence_1: 'Low',
      confidence_2: 'Moderate',
      confidence_3: 'Good',
      confidence_4: 'Strong',
      confidence_unknown: 'Unknown',
      sophistication_none: 'None',
      sophistication_minimal: 'Minimal',
      sophistication_intermediate: 'Intermediate',
      sophistication_advanced: 'Advanced',
      sophistication_expert: 'Expert',
      sophistication_innovator: 'Innovator',
      sophistication_strategic: 'Strategic',
      sophistication_unkown: 'Unkown',
      resource_individual: 'Individual/Independant',
      resource_club: 'Informal group',
      resource_contest: 'Ephemeral groupment',
      resource_team: 'Organized team',
      resource_organization: 'Structured organization',
      resource_government: 'State/Government',
      resource_unkown: 'Unkown',
      motivation_accidental: 'Accidental/Mistake',
      motivation_coercion: 'Coercion/Constrained',
      motivation_dominance: 'Dominance/Power',
      motivation_ideology: 'Ideology/Belief',
      motivation_notoriety: 'Notoriety/Prestige',
      'motivation_organizational-gain': 'Competitive advantage',
      'motivation_personal-gain': 'Individual gain',
      'motivation_personal-satisfaction': 'Personal satisfaction',
      motivation_revenge: 'Revenge/Retaliation',
      motivation_unpredictable: 'Unpredictable/Unkown',
      motivation_unknown: 'Undefined',
      report_status_0: 'New',
      report_status_1: 'In progress',
      report_status_2: 'Analyzed',
      report_status_3: 'Closed',
      organization_constituent: 'Constituent',
      organization_csirt: 'CSIRT',
      organization_partner: 'Partner',
      organization_vendor: 'Vendor',
      organization_other: 'Other',
    },
  },
};

export default i18n;
