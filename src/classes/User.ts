interface User {
	id: string;
	username: string;
	email: string;
	password: string;
}

class User {
	public id: string;
	public username: string;
	public email: string;
	public password: string;

	constructor(dataMembers: User) {
		const { id, username, email, password } = dataMembers;

		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public validatePassword(password: string): boolean {
		return this.password === password;
	}

	public create(user: Omit<User, 'id'>): User {
		//TODO: Add to db here and retrive id
		return new User({ ...user, id: '1' });
	}
}

export default User;