import Subscription from "../model/Subscription.js";

export const addSubscription = async (req, res, next) => {

  try {
    const savedSubscription = await Subscription.create(req.body);
    return res.status(201).json({ savedSubscription });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const allSubscription = async (req, res) => {
  // console.log('here is Subscription')
  try {
    const Subscription = await Subscription.findAll();
    return res.status(200).json(Subscription);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteSubscription = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Subscription.destroy({
      where: { id: id },
    });

    if (deleted) {
      return res.status(200).json({ message: "Subscription deleted" });
    } else {
      return res.status(404).json({ message: "Subscription doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
