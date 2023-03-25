export interface ISearch {
    suggestionGroups: SuggestionGroup[];
}

export interface SuggestionGroup {
    indexName: string;
    indexTitle: string;
    suggestions: Suggestion[];
}

export interface Suggestion {
    searchTerm: string;
    numberOfResults: number;
}
