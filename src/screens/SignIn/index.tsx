import React, { useState } from "react";
import { View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import SignInForm from "../components/SignInForm";
import { styles } from "./styles";

import LogoSvg from "../../assets/svg/logo.svg";
import { useTheme } from "../../context/ThemeContext";

function SignIn() {
  const { signIn, isLoading } = useAuth();

  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {}
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.COLORS.PRIMARY }]}>
      <LogoSvg width={200} height={150} />

      <SignInForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
        handleLogin={handleLogin}
        isLoading={isLoading}
        theme={theme}
      />
    </View>
  );
}

export default SignIn;
