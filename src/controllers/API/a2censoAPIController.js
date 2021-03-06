const db = require("../../database/models");
const campaignModel = require("../../models/campaignModel");

const a2censoAPIController = {
  list: async (req, res) => {
    try {
      let campaign = await campaignModel.find();
      let result = campaign.map((value) => {
        let result = {
          idcampaign: value.idcampaign,
          name: value.name,
          amount: value.amount,
          requestedAmount: value.requestedAmount,
          adminRate: value.adminRate,
          detail: "/api/v1/campaign/" + value.idcampaign,
        };
        return result;
      });
      let respuesta = {
        meta: {
          status: 200,
          total: result.length,
          url: "api/v1/campaing",
        },
        data: result,
      };
      res.status(200).json(respuesta);
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const body = req.body;
      let { name, amount, requestedAmount, adminRate } = body;

      let values = [null, undefined, ""];
      if (
        values.includes(name) ||
        values.includes(amount) ||
        values.includes(requestedAmount)
      ) {
        res.status(404).json({
          message: "Hay campos obligatorios vacios",
        });
      } else {
        if (values.includes(adminRate)) {
          try {
            const create = await campaignModel.create(body);
            // const create = await db.campaign.create({
            //   name: name,
            //   amount,
            //   requestedAmount,
            // });
            res.status(201).json({
              message: "create",
              data: create,
            });
          } catch (error) {
            res.status(404).json({
              message: error.message,
            });
          }
        } else {
          try {
            const create = await campaignModel.create(body);

            res.status(201).json({
              create,
            });
          } catch (error) {
            res.status(404).json({
              message: error.message,
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const update = await campaignModel.update(body, id);
      if (update[0] == 1) {
        let detail = await db.campaign.findByPk(id);
        if (detail == null || detail == undefined) {
          res.status(404).json({
            message: "campaign Not Fount",
          });
        } else {
          res.status(200).json({
            message: "Update",
            data: detail,
          });
        }
      } else {
        res.status(404).json({
          message: "no changes recorded",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "campaign Not Fount",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletee = await campaignModel.delete(id);
      if (deletee == 1) {
        res.status(200).json({
          message: "Delete",
          idcampaign: id,
        });
      } else {
        res.status(404).json({
          message: "Error id not found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  amountAsc: (req, res) => {
    db.campaign
      .findAll({
        order: [["amount", "ASC"]],
      })
      .then((item) => {
        let result = item.map((value) => {
          let result = {
            idcampaign: value.idcampaign,
            name: value.name,
            amount: value.amount,
            requestedAmount: value.requestedAmount,
            " adminRate": value.adminRate,
            detail: "/api/v1/campaign/" + value.idcampaign,
          };
          return result;
        });
        let respuesta = {
          meta: {
            status: 200,
            total: item.length,
            url: "/api/v1/campaign/amount/asc",
          },
          data: result,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).json({
          message: err,
        });
      });
  },
  amountDesc: (req, res) => {
    db.campaign
      .findAll({
        order: [["amount", "DESC"]],
      })
      .then((item) => {
        let result = item.map((value) => {
          let result = {
            idcampaign: value.idcampaign,
            name: value.name,
            amount: value.amount,
            requestedAmount: value.requestedAmount,
            " adminRate": value.adminRate,
            detail: "/api/v1/campaign/" + value.idcampaign,
          };
          return result;
        });
        let respuesta = {
          meta: {
            status: 200,
            total: item.length,
            url: "/api/v1/campaign/amount/desc",
          },
          data: result,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).json({
          message: err,
        });
      });
  },
  requestedAmountAsc: (req, res) => {
    db.campaign
      .findAll({
        order: [["requestedAmount", "ASC"]],
      })
      .then((item) => {
        let result = item.map((value) => {
          let result = {
            idcampaign: value.idcampaign,
            name: value.name,
            amount: value.amount,
            requestedAmount: value.requestedAmount,
            " adminRate": value.adminRate,
            detail: "/api/v1/campaign/" + value.idcampaign,
          };
          return result;
        });
        let respuesta = {
          meta: {
            status: 200,
            total: item.length,
            url: "/api/v1/campaign/requestedAmount/asc",
          },
          data: result,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).json({
          message: err,
        });
      });
  },
  requestedAmountDesc: (req, res) => {
    db.campaign
      .findAll({
        order: [["requestedAmount", "DESC"]],
      })
      .then((item) => {
        let result = item.map((value) => {
          let result = {
            idcampaign: value.idcampaign,
            name: value.name,
            amount: value.amount,
            requestedAmount: value.requestedAmount,
            " adminRate": value.adminRate,
            detail: "/api/v1/campaign/" + value.idcampaign,
          };
          return result;
        });
        let respuesta = {
          meta: {
            status: 200,
            total: item.length,
            url: "/api/v1/campaign/requestedAmount/desc",
          },
          data: result,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).json({
          message: err,
        });
      });
  },
  detail: async (req, res) => {
    try {
      let { id } = req.params;
      let detail = await db.campaign.findByPk(id);
      if (detail == null || detail == undefined) {
        res.status(404).json({
          message: "404 Not Found",
        });
      } else {
        res.status(200).json(detail);
      }
    } catch (error) {
      res.status(404).json({
        message: "404 Not Found",
      });
    }
  },
};

module.exports = a2censoAPIController;
