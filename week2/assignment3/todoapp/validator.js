
function validateTitle(title) {// Validate title (must be at least 3 characters)
  if (!title || title.trim().length < 3) {
    return "Title must be at least 3 characters long";
  }
  return true;
}

function validatePriority(priority) {// Validate priority (must be low, medium, or high)
  const allowed = ["low", "medium", "high"];
  if (!allowed.includes(priority.toLowerCase())) {
    return "Priority must be low, medium, or high";
  }
  return true;
}

function validateDueDate(date) {// Validate due date (must be future date)
  const dueDate = new Date(date);
  const today = new Date();

  if (isNaN(dueDate.getTime())) {
    return "Invalid date format";
  }

  if (dueDate <= today) {
    return "Due date must be in the future";
  }

  return true;
}
export { validateTitle, validatePriority, validateDueDate };// Export validation functions
