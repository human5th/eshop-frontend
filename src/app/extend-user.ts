export class ExtendedUser {
    public name: String;
    public email: String;
    public password: String;
    public phone: String;
    public isAdmin: boolean;
    public street: String;
    public apartement: String;
    public zip: String;
    public city: String;
    public country: String;
    
    constructor(
        name: String,
        email: String,
        password: String,
        phone: String,
        isAdmin: string,
        street: String,
        apartement: String,
        zip: String,
        city: String,
        country: String,
        ) {
             this.name = name
             this.email = email
             this.password = password
             this.phone = phone
             this.isAdmin = this.getAdmin(isAdmin)
             this.street = street
             this.apartement = apartement
             this.zip = zip
             this.city = city
             this.country = country
        }
        
        public getAdmin(value: String) :boolean {
            if (value == 'yes') {
                return true
            } 
            return false
        }
        
  }