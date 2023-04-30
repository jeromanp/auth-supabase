import initStripe from "stripe";
import { supabase } from "../../utils/supabase";

const handler = async (req, res) => {
  
  try {
    
    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
    // if (!req.body) {
    //   throw new Error('Missing record in request body');
    // }

    const customer = await stripe.customers.create({
      email: req.body.record.email,
    });

    console.log("CUSTOMER",customer);
    console.log("ID",req.body.record.id);

    await supabase
      .from("profiles")
      .update({stripe_customer: customer.id})
      .eq("id", req.body.record.id);

    res.send({ message: `stripe customer created: ${customer.id}` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
