import os
from git import Repo

# Directory to clone the repository
repo_url = "https://github.com/shioelikashvili1/dvaleba.git"
clone_dir = "dvaleba_repo"

# Clone the repository if not already cloned
if not os.path.exists(clone_dir):
    Repo.clone_from(repo_url, clone_dir)

# Find and print files with 0 lines of code
for root, dirs, files in os.walk(clone_dir):
    for file in files:
        file_path = os.path.join(root, file)
        if os.path.isfile(file_path):
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                lines = f.readlines()
                if len(lines) == 0:  # Check if the file has 0 lines of code
                    print(f"File with 0 lines of code: {os.path.relpath(file_path, clone_dir)}")
