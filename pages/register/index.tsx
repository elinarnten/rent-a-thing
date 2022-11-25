import { NextPage } from "next";
import Link from "next/link";
import { Header } from "../../src/components/big/header/Header";
import { InputField } from "../../src/components/small/inputfield/InputField";
import { PrimaryButton } from "../../src/components/small/primarybtn/PrimaryBtn";
import styles from "./RegisterPage.module.scss";

const Register: NextPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Skapa konto</h1>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <InputField placeholder={"Name"} type={"text"} />
          <InputField placeholder={"Email"} type={"text"} />
          <InputField placeholder={"Password"} type={"text"} />
          <div className={styles.button}>
            <PrimaryButton
              submit={false}
              text="Skapa konto"
              onClick={() => console.log("TODO")}
            />
          </div>
        </form>
        <Link href="/login" className={styles.link}>
          Logga in
        </Link>
      </div>
    </div>
  );
};

export default Register;
