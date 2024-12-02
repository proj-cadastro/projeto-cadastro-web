import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";

const auth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        setSnackbarOpen(true);
        setTimeout(() => {
          router.push("/user/login");
        }, 2000);
      }
    }, [router]);

    const handleCloseSnackbar = () => {
      setSnackbarOpen(false);
    };

    return (
      <>
        <WrappedComponent {...props} />
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Por favor, faça login para acessar esta página.
          </Alert>
        </Snackbar>
      </>
    );
  };

  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthenticatedComponent;
};

export default auth;
