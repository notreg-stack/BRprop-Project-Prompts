import { ZodError } from "zod";

export function validateBody(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message
          }))
        });
      }

      next(error);
    }
  };
}
