import React from "react";
import ProfileDetails from "../../components/common/ProfileDetails";
import toast, { Toaster } from "react-hot-toast";
import { messages } from "../../constant/messages";
const notify = () => toast.success(messages.profileUpdate);

const Profile = () => {
  return (
    <>
      <Toaster />
      <div>
        <ProfileDetails notify={notify} />
      </div>
    </>
  );
};

export default Profile;
