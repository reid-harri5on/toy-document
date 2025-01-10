import { States } from "model";
import { createContext } from "react";

export const Context = createContext<States>({
  documents: [],
  inputLabel: "",
  isExpanded: false,
  isSaved: false,
  selectedIndex: -1,
  targetIndex: 0,
  showSuggestModal: false,
  showSaveModal: false,
  showResetModal: false,
});
