import Cookies from "universal-cookie";
import { serverApi } from "../../lib/config";

const cookies = new Cookies();
let member_data: any = null;

if (cookies.get("access_token")) {
  const memberDataJson = localStorage.getItem("member_data")
    ? localStorage.getItem("member_data")
    : null;

  // Ensure `member_data` is parsed correctly
  member_data = memberDataJson ? JSON.parse(memberDataJson) : null;

  // Safely access `mb_image` and provide a default image if missing
  member_data =
    member_data && member_data.mb_image
      ? `${serverApi}/${member_data.mb_image}`
      : "/public/auth/default_user.svg";
} else {
  // Clear member data if no access token is available
  localStorage.removeItem("member_data");
}

// Log member_data to help with debugging
console.log("== verify ==");
console.log(member_data);

// Export verified member data, safely handling if it's null
export const verifiedMemberData = member_data || null;
