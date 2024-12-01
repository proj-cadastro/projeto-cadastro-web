"use client";

import React, { useState } from "react";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import CoursesTable from "../../../components/UI/organisms/CoursesTable";
import { Container, Box } from "@mui/material";
import { mockCourses } from "../../../utils/mockCourses";
import auth from "@/components/HOCS/auth"; // Importando o HOC de autenticação

const COLUMN_LABELS: Record<string, string> = {
  name: "Name",
  codCourse: "Code",
  subjects: "Subjects",
  initialism: "Initialism",
  model: "Model",
  professors: "Professors",
  coordinator: "Coordinator",
  actions: "Actions",
};

const COLUMN_OPTIONS = Object.keys(COLUMN_LABELS);

function ReportCourses() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "name",
    "codCourse",
    "model",
    "coordinator",
    "actions",
  ]);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          mt: 4,
        }}
      >
        <CoursesTable
          courses={mockCourses}
          visibleColumns={visibleColumns}
          setVisibleColumns={setVisibleColumns}
          COLUMN_OPTIONS={COLUMN_OPTIONS}
          COLUMN_LABELS={COLUMN_LABELS}
        />
      </Box>
      <Box sx={{ mt: 12 }}>
        <Footer />
      </Box>
    </Container>
  );
}

export default auth(ReportCourses);
