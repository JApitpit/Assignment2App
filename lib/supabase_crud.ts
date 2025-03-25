import { supabase } from './supabase';

export const insertUser = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    const { data, error } = await supabase
      .from('user_details')
      .insert([
        {
          first_name: userData.firstName,
          last_name: userData.lastName,
          email: userData.email
        }
      ])
      .select(); 
  
    if (error) {
      console.error('Error inserting user:', error);
      throw error;
    }
  
    return { error: error || null, data: data || null };
};
