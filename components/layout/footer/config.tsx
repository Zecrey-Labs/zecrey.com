export const CONTACT = "bd@zecrey.com";
export const COPYRIGHT = "2022 Zecrey. All rights reserved.";
export const PRIVACY = {
  label: "Privacy Policies, Terms and Conditions",
  url: "https://www.privacypolicies.com/live/612448fc-ff4e-4dd2-a4a2-85e0d8076a71",
};
export const FOOTER_LINKS: {
  label: string;
  link_items: { label: string; url?: string }[];
}[] = [
  {
    label: "Apps",
    link_items: [
      {
        label: "Extension Wallet",
        url: "https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi",
      },
      { label: "Web App" },
      { label: "Zecrey Mobile" },
    ],
  },
  {
    label: "Explorer",
    link_items: [
      { label: "Blockchain Explorer", url: "https://explorer.zecrey.com/" },
      { label: "Info Explorer" },
    ],
  },
  {
    label: "Development",
    link_items: [
      { label: "Github", url: "https://github.com/Zecrey-Labs" },
      { label: "Medium", url: "https://zecrey.medium.com/" },
    ],
  },
  {
    label: "Papers",
    link_items: [
      {
        label: "White Paper",
        url: "https://docsend.com/view/ntcsmt7meu84gcqk",
      },
      { label: "Docs", url: "https://docs.zecrey.com/" },
    ],
  },
];
