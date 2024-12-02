import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  Pagination,
} from "@mui/material";
import CoursesTableHeader from "../molecules/CoursesTableHeader";
import CourseTableRow from "../molecules/CoursesTableRow";
import CoursesFilters from "../molecules/CoursesFilters";
import ColumnVisibilityControl from "../molecules/ColumnVisibilityControl";
import useCourses from "@/context/UtilitarioCursoService";
import { CourseService } from "@/service/Service";

interface CoursesTableProps {
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
  COLUMN_LABELS: Record<string, string>;
  COLUMN_OPTIONS: string[];
}

export default function CoursesTable({
  visibleColumns,
  setVisibleColumns,
  COLUMN_LABELS,
  COLUMN_OPTIONS,
}: CoursesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [filters, setFilters] = useState<{
    search: string;
    models: string[];
  }>({
    search: "",
    models: [],
  });

  const { coursesData, setCoursesData } = useCourses();

  const filteredCourses = coursesData.filter((course) => {
    const courseValue = course.value;

    const matchesSearch =
      courseValue.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      courseValue.codCourse.includes(filters.search);

    const matchesModels =
      filters.models.length === 0 || filters.models.includes(courseValue.model);

    return matchesSearch && matchesModels;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentPageItems = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      await CourseService.deletar(courseId);

      const updatedCourseList = coursesData.filter(
        (course) => course.value._id !== courseId
      );
      setCoursesData(updatedCourseList);
    } catch (error) {
      console.error("Erro ao excluir curso:", error);
    }
  };

  const handleColumnVisibilityChange = (selectedColumns: string[]) => {
    const originalOrder = [
      "name",
      "codCourse",
      "subjects",
      "initialism",
      "model",
      "professors",
      "coordinator",
      "actions",
    ];

    const updatedColumns = selectedColumns.includes("actions")
      ? selectedColumns
      : [...selectedColumns, "actions"];

    const orderedColumns = originalOrder.filter((col) =>
      updatedColumns.includes(col)
    );

    setVisibleColumns(orderedColumns);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "90%",
        margin: "0 auto",
        borderRadius: 2,
        mt: 12,
        overflowX: "auto",
        pb: 12,
      }}
    >
      <CoursesFilters
        filters={filters}
        setFilters={setFilters}
        availableModels={["Presencial", "EAD", "Híbrido"]}
      />

      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          margin: "0 auto",
          borderRadius: 2,
          boxShadow: 3,
          mt: 2,
          overflowX: "auto",
        }}
      >
        <Table>
          <CoursesTableHeader
            visibleColumns={visibleColumns}
            COLUMN_LABELS={COLUMN_LABELS}
          />
          <TableBody>
            {currentPageItems.map((course) => (
              <CourseTableRow
                key={course.value._id}
                data={course.value}
                visibleColumns={visibleColumns}
                onDelete={handleDeleteCourse}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredCourses.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
      <ColumnVisibilityControl
        visibleColumns={visibleColumns}
        setVisibleColumns={handleColumnVisibilityChange}
        COLUMN_OPTIONS={COLUMN_OPTIONS}
        COLUMN_LABELS={COLUMN_LABELS}
      />
    </Box>
  );
}
