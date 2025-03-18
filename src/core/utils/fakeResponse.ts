export async function fakeResponse<T>(
  data: T,
  options?: { timeOut?: number; errorMessage?: string },
): Promise<{ data: T }> {
  const { timeOut = 150, errorMessage = "Error" } = options ?? {};

  return new Promise<{ data: T }>((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 100);
      if (random > 1) {
        resolve({ data });
      } else {
        reject(errorMessage);
      }
    }, timeOut);
  });
}
