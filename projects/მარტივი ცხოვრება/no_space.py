import os

def find_empty_files(folder_path):
    empty_files = []
    
    # Walk through the directory and subdirectories
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            # Check if the file is empty
            if os.path.isfile(file_path) and os.path.getsize(file_path) == 0:
                empty_files.append(file_path)
    
    return empty_files

def main():
    folder_path = input("Please enter the folder path: ")

    if not os.path.exists(folder_path):
        print(f"The folder path '{folder_path}' does not exist.")
        return

    # Find empty files
    empty_files = find_empty_files(folder_path)

    # Print the results as a list
    if empty_files:
        print("List of empty files found:")
        print("\n".join(empty_files))
    else:
        print("No empty files found.")

if __name__ == "__main__":
    main()
