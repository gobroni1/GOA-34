import matplotlib.pyplot as plt
from matplotlib_venn import venn3

# Define the groups based on the problem's data
# E = English, G = German, F = French
E = 20  # students learning English
G = 20  # students learning German
F = 19  # students learning French
E_G = 12  # students learning both English and German
E_F = 11  # students learning both English and French
F_G = 10  # students learning both French and German
E_G_F = 8  # students learning all three languages

# Create the Venn diagram with three sets
plt.figure(figsize=(8, 8))
venn = venn3(subsets=(E - E_G - E_F + E_G_F,  # Only English
                      G - E_G - F_G + E_G_F,  # Only German
                      E_G - E_G_F,            # English and German only
                      F - E_F - F_G + E_G_F,  # Only French
                      E_F - E_G_F,            # English and French only
                      F_G - E_G_F,            # French and German only
                      E_G_F),                 # All three
            set_labels=('English', 'German', 'French'))

# Display the plot
plt.title("Venn Diagram of Language Learning")
plt.show()
