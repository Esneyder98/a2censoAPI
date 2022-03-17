const db = require("../database/models");

const campaignModel = {
  // seleccina todos los registos existentes en la tabla campaign
  find: async () => {
    try {
      const list = await db.campaign.findAll();
      return list;
    } catch (error) {
      throw new Error("campaignt not found");
    }
  },
  // crea registros en la tabla campaign
  // recibe como parametro los datos del registro a crearse
  create: async (dates) => {
    try {
      const create = await db.campaign.create({
        ...dates,
      });
      return create;
    } catch (error) {
      throw new Error("campaign not create");
    }
  },
  //actualiza el registro que corresponda al id enviado por parametro
  //recibe como parametro los datos que se desean actualizar y el id del registro corespondiente
  update: async (dates, id) => {
    try {
      const update = await db.campaign.update(
        {
          ...dates,
        },
        {
          where: { idcampaign: id },
        }
      );
      return update;
    } catch (error) {
      throw new Error("campaign not create");
    }
  },
// Elimina registros de la tabla campaign
// recibe como parametro el id del registro a eliminar
  delete: async (id) => {
    try {
      const deletee = await db.campaign.destroy({
        where: {
          idcampaign: id,
        },
      });
      return deletee;
    } catch (error) {
      return error.message;
    }
  },
};
module.exports = campaignModel;
