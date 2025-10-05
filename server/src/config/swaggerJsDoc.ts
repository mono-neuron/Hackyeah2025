import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Krakowskie Centrum Wolontariatu",
      version: "1.0.0",
    },
  },
  apis: ["src/routes/*.ts"],
};

const openapiSpecification = swaggerJSDoc(options);

export default openapiSpecification;
