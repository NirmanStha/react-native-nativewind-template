/**
 * Formats route names into readable titles
 * @param routeName The raw route name from the navigation
 * @returns A properly formatted title string
 */
export const getRouteTitle = (routeName: string): string => {
  // Special case for home folder
  if (routeName === "(home)") return "Home";

  // Remove parentheses if present
  let name = routeName.replace(/[()]/g, "");

  // Handle dashes and convert to spaces with proper capitalization
  if (name.includes("-")) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Capitalize first letter
  return name.charAt(0).toUpperCase() + name.slice(1);
};
