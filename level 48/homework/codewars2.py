def to_camel_case(text):
    if not text:
        return text
    
    # Replace underscores with dashes and split the text by dashes
    parts = text.replace("_", "-").split("-")
    
    # Check if the first word was originally capitalized
    if parts[0][0].isupper():
        # Capitalize the first part as it was originally capitalized
        camel_case_parts = [parts[0].capitalize()]
    else:
        # Start with the first part in lowercase
        camel_case_parts = [parts[0].lower()]
    
    # Capitalize the first letter of each subsequent part
    for part in parts[1:]:
        camel_case_parts.append(part.capitalize())
    
    # Join the parts into a single camelCase string
    camel_case_string = ''.join(camel_case_parts)
    return camel_case_string