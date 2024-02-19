import { SettingsForm } from "../components/settingsForm/settingsForm";
import { useAppDispatch } from "../hooks/hook-redux";
import { updateUser } from "../redux/auth/authOperation";

const Settings = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (formData: { email: string; name: string }) => {
    dispatch(updateUser(formData));
   
  };

  return (
    <SettingsForm
      title="Settings"
      buttonText="Update"
      onSubmit={handleSubmit}
      includeNameField={true}
    />
  );
};
export default Settings;
