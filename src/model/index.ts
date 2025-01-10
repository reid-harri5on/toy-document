export interface Documents {
  id: number;
  title: string;
  body: string;
  url: string;
  labels: string[];
}

export interface States {
  documents: Documents[];
  inputLabel: string;
  selectedIndex: number;
  targetIndex: number;
  isSaved: boolean;
  isExpanded: boolean;
  showSuggestModal: boolean;
  showSaveModal: boolean;
  showResetModal: boolean;
}
