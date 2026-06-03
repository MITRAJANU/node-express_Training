// Utility layer: asyncHandler forwards rejected promises to Express error middleware.
export const asyncHandler = (controller) => {
  return (req, res, next) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  };
};
