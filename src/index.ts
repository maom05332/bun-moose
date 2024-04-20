import { startServer } from "@services";

try {
  await startServer();
} catch (error) {
  console.error(error);
}
