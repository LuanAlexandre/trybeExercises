const validateInitials = (initials) => initials.length <= 3 && (initials === initials.toUpperCase());

export default validateInitials;
