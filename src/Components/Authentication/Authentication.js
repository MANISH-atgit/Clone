import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Authentication.css";
import {
  addCollectionAndDocuments,
  auth,
  createUserDocumentFromAuth,
  db,
} from "../../firebase/firebase-config";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { loadSignIn, loadSignOut } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { DATA } from "../../firebase/data";

let errorMsg;

function Authentication() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.register);
  // const singleImage = useSelector((state) => state.singleMovieImage);

  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [userLogged, setUserLogged] = useState({});
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMEssage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", DATA);
  // }, []);

  const showError = (error) => {
    let authError = error.message;
    let errorSplit = authError.split("/");
    let errorSplitString = errorSplit[1].toString();
    let errorMessageList = errorSplitString.split(")");
    errorMsg = errorMessageList[0].toString();
    setErrorMEssage(errorMsg);
  };

  const login = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      createUserDocumentFromAuth(user);
      let setDoc = db.collection("cities").doc("LA").set("data");
      // addCollectionAndDocuments("categories", DATA);
      console.log(user);
      setShow(false);
      // navigate("/");
      // dispatch(loadSignIn(userLogged.email));
    } catch (error) {
      showError(error);

      setShow(true);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="Auth">
      <Container>
        <Row className="auth-row">
          <Col lg={3}>
            <div className="Authentication">
              <div className="Login">
                <h5 className="login-user"> Login </h5>
                <input
                  className="auth-email"
                  placeholder="Email..."
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
                <input
                  className="auth-pass"
                  placeholder="Password..."
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />

                {console.log(loginEmail)}
                <button
                  className="auth-button"
                  onClick={() => {
                    login();
                    dispatch(loadSignIn(loginEmail));
                  }}
                >
                  {" "}
                  Login
                </button>
              </div>

              <Alert show={show} variant="danger">
                <Alert.Heading>{errorMessage}</Alert.Heading>
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Authentication;
