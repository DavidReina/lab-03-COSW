    export class User {
		private email: string;
		private password: string; 
        private firstname: string;
        private lastname: string;
		private username: string;
        private image: string;
    
        constructor(email: string, password: string, firstname: string, lastname: string, username: string, image: string) {
			this.email = email;
			this.password = password;            
			this.firstname = firstname;
            this.lastname = lastname;
			this.username = username;
            this.image = image;
        }
    }
