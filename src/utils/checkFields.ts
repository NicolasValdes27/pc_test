export const validateFields = (fields: any[], body: any) => {
    for (const field of fields) {
      if (!body[field]) {
        return false;
      }
    }
    return true;
}