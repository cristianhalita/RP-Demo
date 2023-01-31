//Used to declare Data, to be used in the AirBnb site tests

let input = {
  ValidUsername: "winak68272@quamox.com",
  ValidPassword: "!Ki9Fs7UJ",
};

let selector = {
  UsernameField: "#username",
  PasswordField: "#password",
  LogInButton: "#kc-login",
  LogOutButton: "[aria-label='log out outline']",
  YesButton: "[data-cy='logout-modal-yes']",
  SettingsButton: "[aria-label='settings']",
  UpdateProfileButton: "[testing-el='testing_settings_update_profile_button']",
  Email: "#email",
  FirstName: "#firstName",
  LastName: "#lastName",
  SaveButton: "[type='submit']",
  SuccessAlert: ".alert-success",
  MyTicketsButton: "[data-cy='shared-menu-my-tickets']",
  AddNewTicketButton: "[slot='secondary']",
  TypeSelect: "[aria-haspopup='listbox']",
  TaskRadio: "#alert-input-1-1",
  PriorityRadio: "#alert-input-2-2",
  SelectButton: ".alert-button",
  SubjectField: "[formcontrolname='subject']",
  IssueField: "[formcontrolname='issue']",
  NumberOfCards: "div.section-card-role",
  TicketsList: "red-platform-ticket-list-item",
};

export default {
  input,
  selector,
};
