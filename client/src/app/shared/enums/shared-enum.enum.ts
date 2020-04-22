// Constants of metadata of the application.
export enum EaAppEnum {
    NAME = "EA"
};

// Constant list of stringified navigational paths of the application.
export enum NavigationPathsEnum {
    EAHELP = "eahelp"
};

// Constant list of REST API response status types.
export enum RestApiResponseStatusTypesEnum {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    ERROR = "ERROR"
};

/**
 * The text `Loading` with three animated dots generated using Bootstrap 4 classes.
 * It is used as part of notifiable messages of the application.
 */
const loading: string = `
    Loading
    <span class="spinner-grow spinner-grow-loading"></span>
    <span class="spinner-grow spinner-grow-loading"></span>
    <span class="spinner-grow spinner-grow-loading"></span>
`;
// Constant list of notifiable messages of the application.
export enum NotifyEnum {
    DEFAULT = <any>'',
    LOADING = <any>loading,
    NO_RECORDS_FOUND = <any>'No records found.',
    SOMETHING_WENT_WRONG = <any>'Something went wrong.'
};
