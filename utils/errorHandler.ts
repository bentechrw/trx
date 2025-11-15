/* eslint-disable @typescript-eslint/no-explicit-any */

export const getErrorMessage = (error: any) => {
  if (Array.isArray(error?.response?.data?.error)) {
    return error.response.data.error
      .map((err: any) => `${err.path.join('.')}: ${err.message}`)
      .join('\n');
  }
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  }
  if (typeof error?.response?.data?.error === 'string') {
    return error.response.data.error;
  }
  if (error?.message) {
    return error.message;
  }
  return String(error || 'Unknown error');
};