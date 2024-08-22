import { Box, Typography } from "@mui/material";

interface SinglePlaceProps {
  title: string;
  description: string;
  capacityNumber: string;
  capacityText: string;
}

export default function SinglePlace({
  title,
  description,
  capacityNumber,
  capacityText,
}: SinglePlaceProps): JSX.Element {
  return (
    <>
      <Typography
        variant="body1"
        marginBottom={1}
        sx={{ fontSize: { xs: "24px", lg: "34px" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        width={{ xs: "100%", lg: 520 }}
        lineHeight={1}
        marginBottom={4}
        marginX="auto"
        textAlign="center"
        sx={{ fontSize: { xs: "18px", lg: "24px" } }}
      >
        {description}
      </Typography>
      <Box
        width={120}
        height={120}
        border="1px solid #CCCCCC"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        marginX="auto"
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "18px", lg: "24px" } }}
        >
          {capacityNumber} <br />
          {capacityText}
        </Typography>
      </Box>
    </>
  );
}
