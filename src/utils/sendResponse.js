// Utility layer: keeps API responses consistent across controllers.

export const sendSuccess = (res, statusCode, data, message) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message
  });
};
