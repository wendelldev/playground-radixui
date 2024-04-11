import { Avatar, Box, Card, Text } from "@radix-ui/themes";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

export default function GradientCard() {
  return (
    <Card
      style={{
        backgroundImage: "linear-gradient(to right, #7928CA, #FF0080)",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        padding: "16px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {/* cat picture */}
        <Avatar
          radius="full"
          fallback="Wendell Lucena"
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2643&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            borderWidth: "2px",
            borderColor: "white",
          }}
        />

        <Box
          style={{
            alignItems: "start",
            marginLeft: "8px",
          }}
        >
          <Text size="5" color="gray" weight={"bold"}>
            Bom dia Wendell Lucena
          </Text>

          <Text size="3" color={"gray"}>
            Seja bem-vindo ao seu novo aplicativo.
          </Text>
        </Box>
      </Box>

      <Box
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          style={{
            alignItems: "center",
          }}
        >
          <Card
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              padding: "8px",
              borderRadius: "16px",
              minWidth: "220px",
              height: "40px",
            }}
          >
            <Box
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <GoArrowUpRight size={20} color="white" />

              <Text size="3" color={"gray"}>
                Entrada
              </Text>

              <Text size="3" color={"gray"} ml="7">
                8:00
              </Text>
            </Box>
          </Card>

          <Card
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              padding: "8px",
              borderRadius: "16px",
              minWidth: "220px",
              height: "40px",
              marginTop: "8px",
            }}
          >
            <Box
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <GoArrowUpLeft size={20} color="white" />

              <Text size="3" color={"gray"}>
                Saida
              </Text>

              <Text size="3" color={"gray"} ml={"7"}>
                --:--
              </Text>
            </Box>
          </Card>
        </Box>
      </Box>
    </Card>
  );
}
