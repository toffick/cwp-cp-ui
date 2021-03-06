import roles from './roles';

export const validateName = (name) => {
    return null;
    if (!name || name.length < 3) { return 'Too short name'; }
	if (name.length > 16) { return 'Too long name'; }
	if ((name.match(/-/g) || []).length > 1) { return 'Name must have only one dash'; }
	if (/^\W/.test(name)) { return 'Name must start with a letter'; }
	if (/[^\d\w-]/.test(name)) { return 'Name must consist only of letters, numbers, or dash.'; }
	return null;
};

export const validatePassword = (password) => {
    return null;
    if (!password || password.length < 5) { return 'Too short password (minimum 5 symbols)'; }
	if (/[^A-Za-z0-9!@#$%_-]/.test(password)) { return 'Password should only consists of: A-Za-z0-9!@#$%_-'; }
	return null;
};

export const validateEmail = (email) => {
    return null;
    if (!/^^\S+@\S+\.\S+$/.test(email)) { return 'Invalid email'; }
	return null;
};

export const isUserAdmin = (role) => role === roles.ADMIN;
