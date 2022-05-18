import React from "react";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

export default function TopGridDetail() {
  return (
    <Card >
      <CardContent sx={{display:"flex"}}>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Réference
            </Typography>
            <Typography variant="body1"> 1200052S</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Nom
            </Typography>
            <Typography variant="body1">Coulibaly</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Prénoms
            </Typography>
            <Typography variant="body1">Assetou</Typography>
        </Stack>
          </Stack>
        <Divider orientation="vertical" sx={{ color:"red"}}/>
          <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Réference
            </Typography>
            <Typography variant="body1"> 1200052S</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Nom
            </Typography>
            <Typography variant="body1">Coulibaly</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Prénoms
            </Typography>
            <Typography variant="body1">Assetou</Typography>
        </Stack>
        </Stack>
        <Divider orientation="vertical" sx={{ color:"red"}}/>
          <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Réference
            </Typography>
            <Typography variant="body1"> 1200052S</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Nom
            </Typography>
            <Typography variant="body1">Coulibaly</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" sx={{ color: "common.gray" }}>
              Prénoms
            </Typography>
            <Typography variant="body1">Assetou</Typography>
        </Stack>
        </Stack>

        </Stack>
      </CardContent>
    </Card>
  );
}
