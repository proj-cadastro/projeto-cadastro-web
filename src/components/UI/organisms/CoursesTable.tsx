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
import { CourseType } from "../../../interfaces/ICourses";

function transformCourseToRecord(course: CourseType): Record<string, string> {
  return {
    id: course.id || "-",
    name: course.name || "-",
    codCourse: course.codCourse || "-",
    subjects: course.subjects ? course.subjects.join(", ") : "-",
    initialism: course.initialism || "-",
    model: course.model || "-",
    professors: course.professors
      ? course.professors.map((prof) => prof.name).join(", ")
      : "-",
    coordinator: course.coordinator ? course.coordinator.name : "-",
  };
}

interface CoursesTableProps {
  courses: CourseType[];
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
  COLUMN_LABELS: Record<string, string>;
  COLUMN_OPTIONS: string[];
}

export default function CoursesTable({
  courses,
  visibleColumns,
  COLUMN_LABELS,
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

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.codCourse.includes(filters.search);

    const matchesModels =
      filters.models.length === 0 || filters.models.includes(course.model);

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

  return (
    <Box>
      <CoursesFilters
        filters={filters}
        setFilters={setFilters}
        availableModels={["Presencial", "EAD"]}
      />
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          borderRadius: 2,
          boxShadow: 3,
          mt: 4,
          overflowX: "auto",
        }}
      >
        <Table>
          <CoursesTableHeader
            visibleColumns={visibleColumns}
            COLUMN_LABELS={COLUMN_LABELS}
          />
          <TableBody>
            {currentPageItems.map((course, index) => (
              <CourseTableRow
                key={index}
                data={transformCourseToRecord(course)}
                visibleColumns={visibleColumns}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredCourses.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      />
    </Box>
  );
}
