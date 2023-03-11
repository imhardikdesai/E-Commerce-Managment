import React from "react";
import ProfileDetails from "../../components/common/ProfileDetails";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast.success("Profile Updated Successfully!");

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
