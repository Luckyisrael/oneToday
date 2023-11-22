const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  welcomeScreen: {
    readyForLaunch: "Your Generosity makes a difference ",
    welcomeText: "Welcome to Our OneToday",
    exciting: "Please enter your WhatsApp phone number to Register",
  },
  otpScreen: {
    otpDescription: "Please enter the code sent to your Whatsapp",
    resendOtp: "Resend OTP",
    verifyOTP: "Verify OTP",
    enter: "Enter OTP",
    placeholder: "123456"
  },
  errorScreen: {
    title: "Something went wrong!", 
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  signup: {
    name: "Phone Number",
    nameplaceholder: "+2348 0657 86820"
  },
  button: {
    clickIt: "Continue"
  },
  homeScreen: {
    homeTab: "Home",
    showcaseTab: "showcase",
    eventsTab: "Events",
    ProfileTab: "Profile"
  },
  nonprofit: {
    welcomeText: ""
  },
}

export default en
export type Translations = typeof en
