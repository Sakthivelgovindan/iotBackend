// eslint-disable-next-line import/no-named-default
import model from "./index";

export default {
  Query: {
    getDataSheetInfo: (_root, _args, _context) => {
      return model.getDataSheetInfo();
    },
  },
};
